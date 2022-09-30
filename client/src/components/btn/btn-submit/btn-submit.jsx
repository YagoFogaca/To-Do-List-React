import "./btn-submit.css";
export function ButtonSubmit({ type = "submit", text, size, color }) {
  // background-color: #55ff55; width: 35%;

  return (
    <button
      type={type}
      className="btn-global"
      style={{
        width: size,
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
}
