import { Request, Response } from 'express'
import knex from '../database/connection'

class MissaUsuario {
    async create_update(request: Request, response: Response) {
        const { missa_id, usuario_id, quantidade_pessoas, pessoas_jacadastradas } = request.body

        const pessoas_cadastradas = pessoas_jacadastradas + quantidade_pessoas

        const trx = await knex.transaction()

        await trx('missa_usuario').insert({ missa_id, usuario_id, quantidade_pessoas })
        await trx('missas').where({ id: missa_id }).update({ pessoas_cadastradas })

        await trx.commit()

        return response.json({ sucesso: true })
    }

    async index(request: Request, response: Response) {
        const missaUsuario = await knex('missa_usuario').select('*')

        response.json(missaUsuario)
    }
}

export default MissaUsuario