import Knex from 'knex'

export async function up(Knex: Knex) {
    return Knex.schema.createTable('missas', table => {
        table.increments('id').primary()
        table.string('data', 5).notNullable()
        table.string('hora', 5).notNullable()
        table.integer('max_pessoas').notNullable()
        table.integer('pessoas_cadastradas').notNullable()
    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('missas')
}