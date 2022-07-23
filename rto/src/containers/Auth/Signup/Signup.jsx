import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { registerUser } from '../../../backend/Firebase';

const Signup = ({ error, loading, signup, clearErrors, history }) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const { name, email, password, confirm_password } = formData;

  const handleFormChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("submit pressed");
    if (password === confirm_password) {
      const result = await registerUser(name, email, password);
      console.log({ result });
      if (!result) {
        console.log("Failed to sign up, unknown error");
      } else if (!result.val) {
        console.log(`Sign up error: ${result.status}`)
      } else {
        // user successfully registered and persisted
        console.log("successfully signed up");
      }
    } else {
      console.log("Passwords don't match");
    }
    // TODO: display status message to UI
  };

  return (
    <Wrapper>
      <Card type="signup">
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Full Name"
            onChange={(e) => handleFormChange(e)}
            required
          />

          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => handleFormChange(e)}
            required
          />

          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => handleFormChange(e)}
            required
          />

          <Input
            type="password"
            name="confirm_password"
            value={confirm_password}
            placeholder="Confirm Password"
            onChange={(e) => handleFormChange(e)}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Signup;
