import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212121";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Tools" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm heading="Enter the text to analyse: " mode={mode} />
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <Navbar title="Nachiket" mode={mode} toggleMode={toggleMode} />
      {/* <TextForm heading ="Enter the text to analyse" mode={mode}/> */}
      {/* <About /> */}
    </>
  );
}

export default App;
