import { Request, Response } from 'express'
import knex from '../database/connection'

class MissaUsuario {
    async create_update(request: Request, response: Response) {
        const { missa_id, usuario_id, quantidade_pessoas, pessoas_jacadastradas } = request.body

        const pessoas_cadastradas = pessoas_jacadastradas + quantidade_pessoas

        await knex('missa_usuario').insert({ missa_id, usuario_id, quantidade_pessoas })
        await knex('missas').where({ id: missa_id }).update({ pessoas_cadastradas })

        return response.json({ sucesso: true })
    }
}

export default MissaUsuario