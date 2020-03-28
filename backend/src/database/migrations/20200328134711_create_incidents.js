exports.up = function(knex) { // Criação da tabela
  return knex.schema.createTable('incidents', table => {
    table.increments(); // ID auto_increment primary_key

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    
    table.string('ong_id').notNullable();

    // Foreign key
    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) { // Caso ocorra um erro
  return knex.schema.dropTable('incidents');
};
