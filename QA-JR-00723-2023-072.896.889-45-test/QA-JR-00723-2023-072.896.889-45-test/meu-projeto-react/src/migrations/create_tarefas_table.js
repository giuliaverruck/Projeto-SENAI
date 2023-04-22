exports.up = function(knex) {
    return knex.schema.createTable('tarefas', function(table) {
      table.increments('id').primary();
      table.string('titulo').notNullable();
      table.string('descricao').notNullable();
      table.date('data_criacao').notNullable().defaultTo(knex.fn.now());
      table.date('data_conclusao');
      table.enum('situacao', ['aberto', 'em_andamento', 'concluido']).notNullable().defaultTo('aberto');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tarefas');
  };
  