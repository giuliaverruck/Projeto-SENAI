const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Task_Manager',
  password: '1262',
  port: 5432, // porta padrão do PostgreSQL
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados', err.stack)
  }
  console.log('Conexão bem sucedida ao banco de dados')

  // Aqui você pode executar suas queries SQL usando o cliente retornado
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Erro ao executar query', err.stack)
    }
    console.log('Resultado da query:', result.rows[0].now)
  })
})

async function testConnection() {
    try {
      await pool.connect();
      console.log('Conexão bem sucedida!');
    } catch (err) {
      console.error('Erro ao conectar:', err.stack);
    } finally {
      await pool.end();
    }
  }
  
  testConnection();
