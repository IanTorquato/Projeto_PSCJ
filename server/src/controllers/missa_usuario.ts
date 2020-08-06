import { Request, Response } from 'express'
import knex from '../database/connection'

class MissaUsuario {
    async create_update(request: Request, response: Response) {
        const trx = await knex.transaction()

        try {
            const { missa_id, usuario_id, quantidade_pessoas, pessoas_jacadastradas } = request.body

            const pessoas_cadastradas = pessoas_jacadastradas + quantidade_pessoas


            await trx('missa_usuario').insert({ missa_id, usuario_id, quantidade_pessoas })
            await trx('missas').where({ id: missa_id }).update({ pessoas_cadastradas })

            await trx.commit()

            return response.json({ mensagem: 'Relacionamento criado com sucesso!' })
        } catch (error) {
            await trx.rollback()

            return response.json({ erro: 'Falha no servidor ao tentar criar o relacionamento missa-usuario.' }).status(500)
        }
    }

    async index(request: Request, response: Response) {
        try {
            const missaUsuario = await knex('missa_usuario').select('*')

            response.json(missaUsuario)
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar listar o relacionamento missa-usuario.' }).status(500)
        }
    }
}

export default MissaUsuario