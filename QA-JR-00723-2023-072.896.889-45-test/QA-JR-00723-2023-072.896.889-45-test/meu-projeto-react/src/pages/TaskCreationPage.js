import React from 'react';
import Header from '../components/Header'
import CadastroTarefa from '../components/CadastroTarefa';
import FooterLinks from '../components/Footer';

const TaskCreationPage = () => {
  return (
    <div>
      <Header/>
       <CadastroTarefa/>
       <FooterLinks/>
    </div>
  );
}

export default TaskCreationPage;
