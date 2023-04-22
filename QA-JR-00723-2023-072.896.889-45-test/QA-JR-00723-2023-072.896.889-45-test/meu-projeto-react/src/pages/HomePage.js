import React from 'react';
import Header from '../components/Header'
import Login from '../components/LoginForm';
import FooterLinks from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header/>
        <Login/>
        <FooterLinks/>
    </div>
  );
}

export default HomePage;
