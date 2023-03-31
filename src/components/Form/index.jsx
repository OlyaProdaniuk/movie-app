import React, { useState } from "react";
import styled from "styled-components";
import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState({ email: null, pass: null });
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  // const handleClick = (e) => {
  //   return alert("Here should be a register form");
  // };

  const handleChange = (e) => {
    if (!e.target.value) {
      setError(`${e.target.name} is not provided`);
    }
    if (e.target.value.length > 10) {
      setError(`${e.target.name} is too long`);
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log({ user });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.value) {
      setError("Please fill in the form");
    }
  };

  return (
    <Container onChange={handleChange}>
      <h1>Login</h1>
      <Form1>
        <Label1 htmlFor="email">email</Label1>
        <Input1
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <Label1 htmlFor="password">password</Label1>
        <Input1
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="password"
        />

        <Submit type="submit" onSubmit={handleSubmit}>
          Log in
        </Submit>
        {error && <Paragraph>{error}</Paragraph>}
      </Form1>
      <Link to={ROUTES.REGISTER}>
        <Button2>
          No account yet? <br /> Register here
        </Button2>
      </Link>
    </Container>
  );
};
export default Form;
//rename Label1/Input1 to Styled...
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
const Form1 = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label1 = styled.label`
  text-align: left;
  padding: 5px;
`;
const Input1 = styled.input`
  margin: 0.5rem 0;
  margin-bottom: 30px;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: none;
  ::placeholder {
    padding-left: 20px;
  }
`;
const Submit = styled.button`
  border: none;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  background-color: blue;
  font-size: 20px;
  color: white;
  :hover {
    opacity: 0.8;
  }
`;
const Button2 = styled.button`
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  :hover {
    opacity: 0.8;
  }
`;
const Paragraph = styled.p`
  color: red;
`;
