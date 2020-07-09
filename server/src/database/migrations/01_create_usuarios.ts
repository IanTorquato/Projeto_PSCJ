import Knex from 'knex'

export async function up(Knex: Knex) {
    return Knex.schema.createTable('usuarios', table => {
        table.increments('id').primary()
        table.string('nome').notNullable()
        table.string('email').notNullable()
    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('usuarios')
}