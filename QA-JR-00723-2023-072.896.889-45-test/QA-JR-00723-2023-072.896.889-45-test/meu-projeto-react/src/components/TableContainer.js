// obtém o elemento pai onde a tabela será renderizada
const tableContainer = document.getElementById('table-container');

// cria a tabela
const table = document.createElement('table');

// cria o cabeçalho da tabela
const headerRow = document.createElement('tr');
headerRow.innerHTML = '<th>Número da tarefa</th><th>Título da tarefa</th><th>Responsável pela tarefa</th><th>Prioridade da tarefa</th><th>Tipo de tarefa</th><th>Data de criação</th><th>Descrição da tarefa</th><th>Situação da tarefa</th>';
table.appendChild(headerRow);

// itera pelos dados e cria as linhas da tabela
const data = [
  { 
    id: 2,
    titulo: 'Corrigir Bug na tela',
    tipo: 'Incidente',
    prioridade: 'Alta',
    data_criacao: '23/03/2022',
    responsavel: 'Usuário 1',
    situacao: 'aberta'
  },
  { 
    id: 3,
    titulo: 'Corrigir Bug na tela 3',
    tipo: 'Solicitação de serviço',
    prioridade: 'Baixa',
    data_criacao: '31/03/2022',
    responsavel: 'Usuário 1',
    situacao: 'aberta'
  },
  { 
    id: 4,
    titulo: 'Corrigir Bug na tela 2',
    tipo: 'Incidente',
    prioridade: 'Média',
    data_criacao: '05/04/2023',
    responsavel: 'Usuário 2',
    situacao: 'aberta'
  },
  { 
    id: 5,
    titulo: 'Corrigir Bug na tela',
    tipo: 'Incidente',
    prioridade: 'Alta',
    data_criacao: '23/02/22',
    responsavel: 'Usuário 1',
    situacao: 'aberta'
  },
  { 
    id: 6,
    titulo: 'Corrigir Bug na tela',
    tipo: 'Incidente',
    prioridade: 'Alta',
    data_criacao: '23/03/2022',
    responsavel: 'Usuário 1',
    situacao: 'aberta'
  }
];

data.forEach(item => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${item.id}</td><td>${item.titulo}</td><td>${item.responsavel}</td><td>${item.prioridade}</td><td>${item.tipo}</td><td>${item.data_criacao}</td><td>${item.descricao}</td><td>${item.situacao}</td>`;
  table.appendChild(row);
});

// adiciona a tabela ao elemento pai
tableContainer.appendChild(table);
