import "./btn-onClick.css";
export function ButtonOnclick({ text, size, color, functionBtn }) {
  return (
    <button
      type="submit"
      className="btn-global"
      onClick={functionBtn}
      style={{
        width: size,
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
}
