import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: separate;
  width: 100%;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: black;
  color: white;
  padding: 10px;
  align-items: center;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const Tr = styled.tr`
background-color: #f2f2f2;
`;


const data = [  {    id: 2,    titulo: "Corrigir Bug na tela",    tipo: "Incidente",    prioridade: "Alta",    data_criacao: "23/03/2022",    responsavel: "Usuário 1",    situacao: "aberta"  },  {    id: 3,    titulo: "Corrigir Bug na tela 3",    tipo: "Solicitação de serviço",    prioridade: "Baixa",    data_criacao: "31/03/2022",    responsavel: "Usuário 1",    situacao: "aberta"  },  {    id: 4,    titulo: "Corrigir Bug na tela 2",    tipo: "Incidente",    prioridade: "Média",    data_criacao: "05/04/2023",    responsavel: "Usuário 2",    situacao: "aberta"  },  {    id: 5,    titulo: "Corrigir Bug na tela",    tipo: "Incidente",    prioridade: "Alta",    data_criacao: "23/02/2022",    responsavel: "Usuário 1",    situacao: "aberta"  },  {    id: 6,    titulo: "Corrigir Bug na tela",    tipo: "Incidente",    prioridade: "Alta",    data_criacao: "23/03/2022",    responsavel: "Usuário 1",    situacao: "aberta"  }];

const TableComponent = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>ID</Th>
          <Th>Título</Th>
          <Th>Tipo</Th>
          <Th>Prioridade</Th>
          <Th>Data de Criação</Th>
          <Th>Responsável</Th>
        </Tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <Tr key={item.id}>
            <Td>{item.id}</Td>
            <Td>{item.titulo}</Td>
            <Td>{item.tipo}</Td>
            <Td>{item.prioridade}</Td>
            <Td>{item.data_criacao}</Td>
            <Td>{item.responsavel}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
