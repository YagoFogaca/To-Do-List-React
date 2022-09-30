import { useState } from "react";
import { TaskAPI } from "../../utils/api/taskApi";
import "./cardTasks.css";

export function CardTasks(props) {
  const item = props.item;
  const [isNotCheck, setIsNotCheck] = useState(false);
  const [isCheck, setIsCheck] = useState(true);

  async function notCheck() {
    setIsNotCheck(!isNotCheck);
    const task = {
      id: item.id,
      status: isCheck,
    };
    await TaskAPI.updateTask(task);
  }

  async function check() {
    setIsCheck(!isCheck);

    const task = {
      id: item.id,
      status: isNotCheck,
    };
    await TaskAPI.updateTask(task);
  }

  return (
    <>
      {item === "" ? (
        <></>
      ) : (
        <div className="card-tasks">
          <div className="body-card">
            <div className="info-input-section">
              {item.status === false ? (
                <input
                  type="checkbox"
                  className="input-checkbox"
                  checked={isNotCheck}
                  onChange={() => {
                    notCheck();
                  }}
                />
              ) : (
                <input
                  type="checkbox"
                  className="input-checkbox"
                  checked={isCheck}
                  onChange={() => {
                    check();
                  }}
                />
              )}

              <p className="info-text">{item.hour}</p>
            </div>
            <div className="info-section">
              <p className="info-text">{item.task}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
