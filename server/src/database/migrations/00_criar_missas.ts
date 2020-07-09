import Knex from 'knex'

export async function up(Knex: Knex) {
    return Knex.schema.createTable('missas', table => {
        table.increments('id').primary()
        table.integer('local_id').notNullable().references('id').inTable('locais')
        table.string('data', 5).notNullable()
        table.string('hora', 5).notNullable()
        table.integer('max_pessoas').notNullable()
        table.integer('pessoas_cadastradas').notNullable().defaultTo(0)
    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('missas')
}