module.exports = {
    development: {
      client: 'pg',
      connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'Task_Manager',
        password: '1262',
      },
      migrations: {
        directory: './src/migrations/create_tarefas_table',
      },
    },
  };
  