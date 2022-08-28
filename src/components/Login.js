import React, { useState } from "react";
import Userfront from "@userfront/react";

Userfront.init("8nw8zw5b");

const SignupForm = Userfront.build({
  toolId: "anddmd"
});

const LoginForm = Userfront.build({
  toolId: "morrmm"
});


class Demo extends React.Component {
  render () {
    return <SignupForm />


    return <LoginForm />
  }
}
/*
class Layout_header extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}
*/
/*
const Layout_header = ({
    
});
*/
const Login = () => {
  
  
  
  
  return <SignupForm/>;
  //return <Layout_header/>; //<LoginForm />;
};

export default Login;
