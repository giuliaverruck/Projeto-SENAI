const express = require('express');
import { response } from 'express';
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Função para criar uma nova tarefa
async function createTask(req, res) {
  const { titulo, tipo, prioridade, descricao, situacao } = req.body;
  try {
    const query = `INSERT INTO tarefas (titulo, tipo, prioridade, descricao, situacao) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [titulo, tipo, prioridade, descricao, situacao];
    const result = await pool.query(query, values);
    res.status(201).send(result.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Função para listar todas as tarefas
async function getAllTasks(req, res) {
  try {
    const query = `SELECT * FROM tarefas`;
    const result = await pool.query(query);
    res.send(result.rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Função para buscar uma tarefa pelo id
async function getTaskById(req, res) {
  const { id } = req.params;
  try {
    const query = `SELECT * FROM tarefas WHERE id = $1`;
    const values = [id];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      throw new Error('Tarefa não encontrada');
    }
    res.send(result.rows[0]);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

// Função para atualizar uma tarefa pelo id
async function updateTaskById(req, res) {
  const { id } = req.params;
  const { titulo, tipo, prioridade, descricao, situacao } = req.body;
  try {
    const query = `UPDATE tarefas SET titulo = $1, tipo = $2, prioridade = $3, descricao = $4, situacao = $5 WHERE id = $6 RETURNING *`;
    const values = [titulo, tipo, prioridade, descricao, situacao, id];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      throw new Error('Tarefa não encontrada');
    }
    res.send(result.rows[0]);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

// Função para excluir uma tarefa pelo id
async function deleteTaskById(req, res) {
  const { id } = req.params;
  try {
    const query = `DELETE FROM tarefas WHERE id = $1 RETURNING *`;
    const values = [id];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      throw new Error('Tarefa não encontrada');
    }
    res.send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}

// Função para excluir uma tarefa quando o status é "concluido"
async function deleteTaskWhenCompleted(req, res) {
  const { id } = req.params;
  try {
    const query = `DELETE FROM tarefas WHERE id = ${id} AND situacao = 'concluido'`;
    const result = await pool.query(query);
    if (result.affectedRows === 0) {
      return res.status(404).send('Tarefa não encontrada ou não está concluída');
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao excluir a tarefa');
  }
}

// Rota para criar uma nova tarefa
app.post('/tarefas', createTask);

// Rota para listar todas as tarefas
app.get('/tarefas', getAllTasks);

// Rota para buscar uma tarefa pelo id
app.get('/tarefas/:id', getTaskById);

// Rota para atualizar uma tarefa pelo id
app.put('/tarefas/:id', updateTaskById);

// Rota para excluir uma tarefa pelo id
app.delete('/tarefas/:id', deleteTaskById);

// Rota para excluir uma tarefa quando o status é "concluido"
app.delete('/tarefas/concluidas/:id', deleteTaskWhenCompleted);

app.listen(port, () => {
  console.log(`API executando na porta ${port}.`);
});

module.exports = {
  getAllTasks,
  createTask,
  updateTaskById,
  deleteTaskById,
  deleteTaskWhenCompleted,
};
