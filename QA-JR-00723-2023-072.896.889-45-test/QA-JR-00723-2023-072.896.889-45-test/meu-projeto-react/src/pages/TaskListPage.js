import React from 'react';
//import TaskList from '../components/TaskList';
import Header from '../components/Header'
import TabelaTarefas from '../components/TabelaTarefas';
import FooterLinks from '../components/Footer';
import TableComponent from '../components/Tasks';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TaskCreationPage from './TaskCreationPage'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:content-distribution;
  align-items: center;
  height: 100vh;
  background-color: #4169E1
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
const Button = styled.button`
  background-color: white;
  color:#4169E1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
`;

const TaskListPage = () => {
  return (
    <div>
      <Header/>
    <Container>
      <H1>Lista de Tarefas</H1>
      <Button component={TaskCreationPage}>Nova Tarefa</Button>
      <TableComponent/>
      </Container>
      <FooterLinks/>
    </div>
  );
}

export default TaskListPage;
