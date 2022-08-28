import React from "react";
import Userfront from "@userfront/react";

Userfront.init("8nw8zw5b");

const SignupForm = Userfront.build({
  toolId: "anddmd"
});

const Login = () => {
  return <SignupForm/>;
};

export default Login;
