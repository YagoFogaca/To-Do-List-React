import { MdDeleteForever } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";
import { TaskAPI } from "../../utils/api/taskApi";
import { ButtonSubmit } from "../btn/btn-submit/btn-submit";
import { ButtonOnclick } from "../btn/btn-onClick/btn-onClick";

import "./modalTasks.css";

export function ModalTasks(props) {
  const tasks = props.tasks;

  const [modifyTask, setModifyTask] = useState(false);

  const taskDay = [];
  tasks.map((task, index) => {
    if (task.day_week === props.day_week) {
      taskDay.push(task);
    }
    return task;
  });

  async function updateTask(taskUpdate, index, event) {
    event.preventDefault();
    const task = {
      id: taskUpdate.id,
      id_user: taskUpdate.id_user,
      day_week: taskUpdate.day_week,
      hour: event.target.hour.value,
      task: event.target.task.value,
      status: taskUpdate.status,
    };
    await updateTaskApi(task, index);
  }

  async function updateTaskApi(task, index) {
    await TaskAPI.updateTask(task);
    setModifyTask(!modifyTask);
    taskDay.splice(index, 1, task);
  }

  async function deleteTask(task, index) {
    await TaskAPI.deleteTask(task.id);
    setModifyTask(!modifyTask);
    taskDay.splice(index, 1);
  }

  useEffect(() => {
    props.api();
  }, [modifyTask]);

  return (
    <>
      <div className="header-modalTasks">
        <h2>{props.day_week}</h2>
      </div>
      <GrClose
        size={36}
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={props.modal}
      />
      {taskDay.map((task, index) => {
        return (
          <form
            className="form-task"
            key={index}
            onSubmit={(event) => {
              updateTask(task, index, event);
            }}
          >
            <input required name="hour" className="input-hour" type="time" defaultValue={task.hour} />
            <input required name="task" className="input-task" type="text" defaultValue={task.task} />
            <ButtonSubmit text={"Editar"} size={"10%"} color={"#55ff55"} />
            <ButtonOnclick
              text={"Deletar"}
              size={"10%"}
              color={"#f00"}
              functionBtn={() => {
                deleteTask(task, index);
              }}
            />
          </form>
        );
      })}
    </>
  );
}
