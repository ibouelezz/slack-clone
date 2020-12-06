import "./Login.css";
import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://a.slack-edge.com/4a5c4/marketing/img/icons/icon_slack.svg"
          alt=""
        />
        <h1>Sign in to Ibouelezz HQ</h1>
        <p>ibouelezz.slack.com</p>
        <Button onClick={signIn}>Sign in with Google!</Button>
      </div>
    </div>
  );
}

export default Login;
