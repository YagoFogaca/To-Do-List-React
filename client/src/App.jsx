import "./reset.css";

// import { Body } from "./components/body/body";
import { Home } from "./page/home/home";
import { Initial } from "./page/initial/initial";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  // APENAS UM TESTE
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
