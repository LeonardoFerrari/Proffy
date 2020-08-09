import Knex from 'knex';

// realizar alterações no banco

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id').notNullable()
        .references('id').inTable('users')
        .onUpdate('CASCADE').onDelete('CASCADE');

        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable();
    })
}

// Backup, voltar atras deletando a tabela 

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}