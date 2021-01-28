exports.up = function(knex, Promise) {
    return knex.schema.createTable('results', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('response_id');
        table.string('referer');
        table.float('planning');
        table.float('execution');
        table.float('communication');
        table.float('learning');
        table.float('agency');
        table.float('awareness');
        table.float('estimations');
        table.integer('submitted_at');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('results');
};