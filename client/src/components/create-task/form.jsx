import { useState, useEffect } from "react";
import { TaskAPI } from "../../utils/api/taskApi";
import { ButtonSubmit } from "../btn/btn-submit/btn-submit";
import "./form.css";

export function FormCreate({ api, hendleModal }) {
  const [option, setOption] = useState();
  const [createdTask, setCreateTask] = useState(false);

  async function createTask(event) {
    event.preventDefault();
    const task = {
      id_user: localStorage.getItem("user"),
      day_week: option,
      hour: event.target.hour.value,
      task: event.target.task.value,
      status: "false",
    };

    await TaskAPI.createTask(task);
    setCreateTask(!createdTask);
    hendleModal();
  }

  useEffect(() => {
    api();
  }, [createdTask]);

  return (
    <>
      <form className="form-create-task" onSubmit={createTask}>
        <label>Dia da semana:</label>
        <select
          name="day_week"
          className="select-day-week"
          onChange={(event) => {
            setOption(event.target.value);
          }}
        >
          <option value=""></option>
          {/* <option value="Diariamente">Diariamente</option> */}
          <option value="Segunda">Segunda</option>
          <option value="Terça">Terça</option>
          <option value="Quarta">Quarta</option>
          <option value="Quinta">Quinta</option>
          <option value="Sexta">Sexta</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
        <label>Hora:</label>
        <input type="time" name="hour" className="input-hour" />
        <label>Tarefa</label>
        <input type="text" name="task" className="input-task" />
        <section className="btn-section">
          <ButtonSubmit text={"Criar"} size={"35%"} color={"#55ff55"} />
          <ButtonSubmit type={"reset"} text={"Limpar"} size={"35%"} color={"#f00"} />
        </section>
      </form>
    </>
  );
}
