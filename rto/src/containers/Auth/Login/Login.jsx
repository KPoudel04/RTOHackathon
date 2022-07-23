import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Wrapper from "../../../components/Wrapper/Wrapper";
import "./Login.css";

import { signInUser } from '../../../backend/Firebase';

const Login = ({ error, loading, login, clearErrors, history }) => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleFormChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("submit pressed");
    const result = await signInUser(email, password);
    console.log({ result });
    if (!result) {
      console.log("Failed to sign in, unknown error");
    } else if (!result.val) {
      console.log(`Sign in error: ${result.status}`)
    } else {
      // user successfully signed in
      console.log("successfully signed in");
    }
    // TODO: display status message to UI
  };

  return (
    <Wrapper class="login-body card">
      <Card class="login-body card" type="signin">
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => handleFormChange(e)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleFormChange(e)}
            value={password}
          />

          <Button type="submit">Log In</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Login;
