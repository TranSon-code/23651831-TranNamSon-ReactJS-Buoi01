import "./LoginForm.css";

function LoginForm({ visible, onClose }) {
  return (
    <div className={`overlay ${visible ? "show" : ""}`}>
      <div className="login-form">
        <button className="close" onClick={onClose}>×</button>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
