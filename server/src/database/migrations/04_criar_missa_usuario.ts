import Knex from 'knex'

export async function up(Knex: Knex) {
	return Knex.schema.createTable('missa_usuario', table => {
		table.increments('id').primary()
		table.integer('missa_id').notNullable().references('id').inTable('missas')
		table.integer('usuario_id').notNullable().references('id').inTable('usuarios')
		table.integer('quantidade_pessoas').notNullable()
	})
}

export async function down(Knex: Knex) {
	return Knex.schema.dropTable('missa_usuario')
}