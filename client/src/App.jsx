import "./reset.css";

import { Body } from "./components/body/body";
import { Initial } from "./page/initial/initial";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Body />} />
      </Routes>
    </BrowserRouter>
  );
}
