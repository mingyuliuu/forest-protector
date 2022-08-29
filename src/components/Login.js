import React from "react";
import Userfront from "@userfront/react";
import BgImage from "../bg.png";

Userfront.init("8nw8zw5b");

const SignupForm = Userfront.build({
  toolId: "anddmd",
});

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SignupForm />
    </div>
  );
};

export default Login;
