import React, { useState } from "react";
import styled from "styled-components";

const RegisterForm = () => {
  const [user, setUser] = useState({ email: null, pass: null });
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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

  return (
    <Container onChange={handleChange}>
      <h1>Register</h1>
      <Form1 onSubmit={handleSubmit}>
        <Label1 htmlFor="name">name</Label1>
        <Input1
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="name"
        />
        <Label1 htmlFor="surname">surname</Label1>
        <Input1
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="surname"
          placeholder="surname"
        />
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

        {error && <Paragraph>{error}</Paragraph>}
        <Submit type="submit">Register</Submit>
      </Form1>
    </Container>
  );
};
export default RegisterForm;

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
`;
const Input1 = styled.input`
  margin: 0.5rem 0;
  width: 300px;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
  ::placeholder {
    padding: 20px;
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
const Paragraph = styled.p`
  color: red;
`;
