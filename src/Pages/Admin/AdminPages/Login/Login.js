import React, { useContext, useEffect } from "react";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        setDisplayName(
          user.displayName !== null ? user.displayName : user.email
        );
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
  useEffect(() => {
    if (auth.currentUser) {
      const user = auth.currentUser;
      dispatch({ type: "LOGIN", payload: user });
    }
    return () => {
      auth.signOut();
    };
  }, [dispatch]);

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
