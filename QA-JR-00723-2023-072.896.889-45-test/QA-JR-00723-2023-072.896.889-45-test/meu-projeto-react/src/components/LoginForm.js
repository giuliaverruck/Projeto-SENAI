import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:content-distribution;
  align-items: center;
  height: 100vh;
  background-color: #4169E1
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color:#FFFFFF;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #ccc;
`;

const Button = styled.button`
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  background-color: #4169E1;
  color: #fff;
  cursor: pointer;
`;
const H1 = styled.h1`
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
`;
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Lógica para efetuar o login
  };

  return (
    <LoginContainer>
    <H1>Login</H1>
      <LoginBox>
        <Form>
          <Input type="text" placeholder="Login" value={username} onChange={handleUsernameChange} />
          <Input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
          <Button onClick={handleLogin}>Entrar</Button>
        </Form>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
