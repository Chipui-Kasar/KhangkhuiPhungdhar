import React from "react";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = (props) => {
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setDisplayName(
          user.displayName !== null ? user.displayName : user.email
        );
        //if logged in set login status to true
        props.setLoginStatus(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorCode.split("/")[1].replaceAll("-", " ") + "!");
        // ..
      });
  };
  return (
    <div className="login">
      {displayName}
      <div className="formControl">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <span>{error}</span>
      </div>
    </div>
  );
};

export default Login;
