import React, { useState, useEffect } from 'react';
//import { getAllTasks } from '../services/api.js';

function TabelaTarefas() {
  const [tarefas, setTarefas] = useState([]);

 //
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Tipo</th>
          <th>Prioridade</th>
          <th>Descrição</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        {tarefas.map((tarefa) => (
          <tr key={tarefa.id}>
            <td>{tarefa.id}</td>
            <td>{tarefa.titulo}</td>
            <td>{tarefa.tipo}</td>
            <td>{tarefa.prioridade}</td>
            <td>{tarefa.descricao}</td>
            <td>{tarefa.situacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaTarefas;
