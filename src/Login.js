import "./Login.css";
import React from "react";
import { Button } from "@material-ui/core";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://a.slack-edge.com/4a5c4/marketing/img/icons/icon_slack.svg"
          alt=""
        />
        <h1>Sign in to Ibouelezz HQ</h1>
        <p>ibouelezz.slack.com</p>
        <Button>Sign in with Google!</Button>
      </div>
    </div>
  );
}

export default Login;
