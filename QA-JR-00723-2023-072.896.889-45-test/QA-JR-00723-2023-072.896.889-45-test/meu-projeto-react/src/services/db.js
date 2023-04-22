const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Task_Manager',
    password: '1262',
    port: 5432, // porta padrão do PostgreSQL
});

module.exports = pool;
