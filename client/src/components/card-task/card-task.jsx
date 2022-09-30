import { GrDocumentConfig } from "react-icons/gr";
import { CardTasks } from "../card-tasks/cardTasks";
import "./card-task.css";

export function CardTask({ day_week, tasks, taskModal, modal }) {
  return (
    <section className="section-card">
      <div className="header">
        <h2 className="day-week">{day_week}</h2>
        <GrDocumentConfig
          size={28}
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            modal();
            taskModal(day_week);
          }}
        />
      </div>
      {tasks.map((task, index) => {
        if (task.day_week === day_week) {
          return <CardTasks key={index} item={task} />;
        }
      })}
    </section>
  );
}
