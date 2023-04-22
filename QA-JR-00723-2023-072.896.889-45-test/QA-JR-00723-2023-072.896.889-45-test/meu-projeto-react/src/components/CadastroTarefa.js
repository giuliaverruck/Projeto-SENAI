import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:content-distribution;
  align-items: center;
  height: 100vh;
  background-color: #4169E1
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
const Textarea = styled.textarea`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #ccc;
`;
const Label = styled.label`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:#4169E1;
`;
const Select = styled.select`
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




function CadastroTarefa() {
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('');
  const [prioridade, setPrioridade] = useState('Sem prioridade');
  const [descricao, setDescricao] = useState('');

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  }

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  }

  const handlePrioridadeChange = (event) => {
    setPrioridade(event.target.value);
  }

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você poderia fazer uma chamada para o backend e salvar os dados no banco de dados.
    // Como esse código foca apenas no front-end, vamos apenas limpar os campos e mostrar uma mensagem de sucesso.
    setTitulo('');
    setTipo('');
    setPrioridade('Sem prioridade');
    setDescricao('');
    alert('Tarefa cadastrada com sucesso!');
    // Você pode aqui navegar para a página de listagem de tarefas (RF2) utilizando o React Router, por exemplo.
  }

  const handleCancel = () => {
    // Aqui você pode também navegar para a página de listagem de tarefas (RF2) utilizando o React Router, por exemplo.
  }

  return (
    <div>
        <Container>
      <H1>Cadastro de Tarefa</H1>
      
      <Form onSubmit={handleSubmit}>
        <Label>
          Título:
          <Input type="text" value={titulo} onChange={handleTituloChange} required placeholder='Escreva aqui o título da sua tarefa' />
        </Label>
        <Label>
          Tipo:
          <Select value={tipo} onChange={handleTipoChange} required>
            <option value="">Selecione...</option>
            <option value="Incidente">Incidente</option>
            <option value="Solicitação de Serviço">Solicitação de Serviço</option>
            <option value="Melhorias">Melhorias</option>
            <option value="Projetos">Projetos</option>
          </Select>
        </Label>
       
        <Label>
          Prioridade:
          <Select value={prioridade} onChange={handlePrioridadeChange} required>
            <option value="">Selecione...</option>
            <option value="Sem prioridade">Sem prioridade</option>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </Select>
        </Label>
        <Label>
          Descrição:
          <Textarea value={descricao} onChange={handleDescricaoChange} required placeholder='Digite aqui uma descrição para sua tarefa'/>
        </Label>
       <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleCancel}>Cancelar</Button>
      </Form>
      
      </Container>
    </div>
  );
}

export default CadastroTarefa;
