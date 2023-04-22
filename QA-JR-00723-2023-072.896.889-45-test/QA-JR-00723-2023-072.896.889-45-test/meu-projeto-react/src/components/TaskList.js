import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Pagination from './Pagination';

const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  background-color: #4169E1;
  color: #FFFFFF;
  font-weight: bold;
  padding: 10px;
  text-align: left;
`;

const TableData = styled.td`
  border: 1px solid #4169E1;
  padding: 10px;
`;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/tarefas' // endpoint da API que retorna as tarefas
      );
      setTasks(result.data);
    };
    fetchData();
  }, []);

  // Logic for displaying current tasks
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tasks.length / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderTableHeader = () => {
    const headerElements = [
      'Número da tarefa',
      'Título da tarefa',
      'Tipo da tarefa',
      'Prioridade da tarefa',
      'Data de abertura',
      'Responsável pela tarefa'
    ];

    return (
      <thead>
        <tr>
          {headerElements.map((headerElement) => (
            <TableHeader key={headerElement}>{headerElement}</TableHeader>
          ))}
        </tr>
      </thead>
    );
  };

  const renderTableData = (taskList) => {
    return (
      <tbody>
        {taskList.map((task) => (
          <tr key={task.id}>
            <TableData>{task.id}</TableData>
            <TableData>{task.title}</TableData>
            <TableData>{task.type}</TableData>
            <TableData>{task.priority}</TableData>
            <TableData>{task.openDate}</TableData>
            <TableData>{task.responsible}</TableData>
          </tr>
        ))}
      </tbody>
    );
  };

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <TaskListContainer>
      <Table>
        {renderTableHeader()}
        {renderTableData(currentTasks)}
      </Table>
      <Pagination
        itemsPerPage={10}
        totalItems={tasks.length}
        paginate={handleClick}
      />
    </TaskListContainer>
  );
};

export default TaskList;