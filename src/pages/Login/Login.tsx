import React from "react";

import "./Login.scss";
import { loginUrl } from "../../spotify";

const Login = () => {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
