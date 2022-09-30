import Modal from "react-modal";
import { useEffect, useState } from "react";
import { TaskAPI } from "../../utils/api/taskApi";
import { ModalTasks } from "../modal-tasks/modalTasks";
import { CardTask } from "../card-task/card-task";
import { Header } from "../menu/menu";

import "./body.css";
// criar um arquivo customStyles para não ficar com o código tão sujo
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#323232",
    display: "flex",
    width: "75%",
    height: "400px",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

Modal.setAppElement("#root");

export function Body() {
  const day_week = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [task, setTask] = useState([]);
  const [taskModal, setTaskModal] = useState("");

  function setModalOpen() {
    setModalIsOpen(!modalIsOpen);
  }

  const id_user = localStorage.getItem("user");

  async function api() {
    const results = await TaskAPI.getAllTasksUser(id_user);
    setTask(results);
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <Header api={api} />
      <main className="main">
        {day_week.map((item, index) => {
          return <CardTask day_week={item} tasks={task} key={index} taskModal={setTaskModal} modal={setModalOpen} />;
        })}
        <Modal isOpen={modalIsOpen} onRequestClose={setModalOpen} style={customStyles}>
          <ModalTasks day_week={taskModal} api={api} tasks={task} modal={setModalOpen} />
        </Modal>
      </main>
    </>
  );
}
