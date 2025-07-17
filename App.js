import { useState } from "react";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import Alert from "./Component/Alert";
import About from "./Component/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 2000); 
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Textform head=" Try-WordCounter, Character counter, Copy to clipboard" mode={mode} />} />
        <Route path="/about" element={<About   mode={mode} />} />
        <Route path="/Contactus"/>
      </Routes>
    </Router>
  );
}

export default App;
