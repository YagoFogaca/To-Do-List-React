import { useState } from "react";
import { GrAdd, GrClose } from "react-icons/gr";
import Modal from "react-modal";
import { FormCreate } from "../create-task/form";
import "./menu.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    position: "fixed",
    top: "0",
    left: "auto",
    right: "0",
    bottom: "auto",
    backgroundColor: "#323232",
    display: "flex",
    width: "40%",
    minWidth: "250px",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

export function Header({ api }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function hendleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <header id="nav-bar">
      <div id="figure-logo">
        <img id="img-logo" src="./img/logo.png" alt="" />
      </div>
      <div id="form-add">
        <button type="submit" className="btn-add" onClick={hendleModal}>
          <GrAdd size={32} />
        </button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={hendleModal} style={customStyles}>
        <GrClose
          size={34}
          onClick={hendleModal}
          style={{
            cursor: "pointer",
            position: "fixed",
            top: "10px",
            right: "10px",
          }}
        />
        <FormCreate api={api} hendleModal={hendleModal} />
      </Modal>
    </header>
  );
}
