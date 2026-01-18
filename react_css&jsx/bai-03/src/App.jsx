import { useState } from "react";
import Alert from "./components/Alerts/Alert";
import "./App.css";

function App() {
  const [status, setStatus] = useState("");

  return (
    <div className="app">
      <div className="buttons">
        <button onClick={() => setStatus("success")}>Success</button>
        <button onClick={() => setStatus("warning")}>Warning</button>
        <button onClick={() => setStatus("error")}>Error</button>
      </div>

      <Alert
        type={status}
        message={`This is a ${status} alert`}
      />
    </div>
  );
}

export default App;
