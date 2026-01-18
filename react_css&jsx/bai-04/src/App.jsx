import { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const openForm = () => {
    setShow(true);
    setTimeout(() => setVisible(true), 10);
  };

  const closeForm = () => {
    setVisible(false);
    setTimeout(() => setShow(false), 300); // = transition time
  };

  return (
    <div className="page">
      {!show && (
        <button className="open-btn" onClick={openForm}>
          Login
        </button>
      )}

      {show && (
        <LoginForm visible={visible} onClose={closeForm} />
      )}
    </div>
  );
}

export default App;
