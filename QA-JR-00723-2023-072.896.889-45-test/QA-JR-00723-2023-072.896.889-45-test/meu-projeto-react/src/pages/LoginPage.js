import React from 'react';
import Header from '../components/Header'
import Login from '../components/LoginForm';
import FooterLinks from '../components/Footer';

const LoginPage = () => {
  return (
    <div>
      <Header/>
      <Login/>
      <FooterLinks/>
    </div>
  );
}

export default LoginPage;
