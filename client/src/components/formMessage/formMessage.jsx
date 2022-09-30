import "./formMessage.css";

export function FormMessage({ message, nameClass }) {
  return <p className={nameClass}>{message}</p>;
}
