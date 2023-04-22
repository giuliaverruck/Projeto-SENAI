import React, { useState } from 'react';
import styled from 'styled-components';

const BigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  width: 100%;
  margin: 0 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const H1 = styled.h1`
  font-size: 24px;
  margin: 10px 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Span = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  resize: none;
`;

const headerStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DetalhesHeader = styled.header`
  ${headerStyle}
  margin-bottom: 20px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const TaskDetails = ({ onSaveObservation }) => {
  const [newObservation, setNewObservation] = useState('');
  const [isEditingObservation, setIsEditingObservation] = useState(false);
  const user = { id: 1, nome: 'Usuário 1' };
  const task = {
    id: 2,
    titulo: "Corrigir Bug na tela",
    tipo: "Incidente",
    prioridade: "Alta",
    data_criacao: "23/03/2022",
    responsavel: { id: 1, nome: 'Usuário 1' },
    situacao: "aberta",
    descricao: "Bug no formulário de Login, input e botão estão descentralizados e não clicáveis",
    observations: [{ text: 'Observação inicial' }]
  };

  const handleTakeTask = () => {
    // Altera responsável para usuário logado
  };

  const handleCloseTask = () => {
    // Altera situação para Concluída
    // Solicita nova providência
  };

  const handleSaveObservation = () => {
    onSaveObservation(newObservation);
    setNewObservation('');
  };

  return (
    <BigContainer>
    <Container>
      <headerStyle>
        <H1>Detalhes da Tarefa</H1>
        <H1>Tarefa #{task.id}</H1>
      </headerStyle>
      <Section>
        <Div>
          <Label>Título:</Label>
          <Span>{task.titulo}</Span>
        </Div>
        <Div>
          <Label>Responsável:</Label>
          <Span>{task.responsavel.nome}</Span>
        </Div>
        <Div>
          <Label>Prioridade:</Label>
          <Span>{task.prioridade}</Span>
        </Div>
        <Div>
          <Label>Tipo:</Label>
          <Span>{task.tipo}</Span>
        </Div>
        <Div>
          <Label>Data de criação:</Label>
          <Span>{task.data_criacao}</Span>
        </Div>
        <Div>
          <Label>Descrição:</Label>
          <Span readOnly>{task.descricao}</Span>
        </Div>
        <Div>
          <Label>Situação:</Label>
          <Span>{task.situacao}</Span>
        </Div>
        <ButtonsDiv>
      <Button onClick={handleTakeTask}>Assumir Tarefa</Button>
      <Button onClick={handleCloseTask}>Fechar Tarefa</Button>
      </ButtonsDiv></Section>
      <div>
        <Label>Última Observação:</Label>
        <Span>{task.observations[0].text}</Span>
        <Button onClick={() => setIsEditingObservation(true)}>Editar</Button>
      </div>
      {!isEditingObservation &&
        <Section>
          <Label>Nova Observação:</Label>
          <Textarea
            disabled={task.responsavel.id !== user.id || task.situacao === 'Concluída'}
            value={newObservation}
            onChange={(e) => setNewObservation(e.target.value)}
          />
          <Button onClick={handleSaveObservation} disabled={!newObservation}>Salvar</Button>
        </Section>
      }
      {isEditingObservation &&
        <Section>
          <Label>Editar Observação:</Label>
          <Textarea
            value={task.observations[0].text}
            onChange={(e) => setNewObservation(e.target.value)}
          />
          <Button onClick={() => setIsEditingObservation(false)}>Cancelar</Button>
          </Section>}
        </Container>
        </BigContainer>
  )
  }     ;

  export default TaskDetails;