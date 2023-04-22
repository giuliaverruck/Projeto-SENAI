import React from 'react';
import styled from 'styled-components';
import { FiCheckSquare } from 'react-icons/fi';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4169E1;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  height: 60px;
  padding: 0 20px;
  margin: 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <FiCheckSquare />
        <Title>Task Manager</Title>
      </Logo>
      <Nav>
        <Button>Login</Button>
        <Button secondary>Cadastre-se</Button>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
