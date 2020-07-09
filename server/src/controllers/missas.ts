import { Request, Response } from 'express'
import knex from '../database/connection'

class Missas {
    async create(request: Request, response: Response) {
        const { local_id, data, hora, max_pessoas } = request.body

        await knex('missas').insert({ local_id, data, hora, max_pessoas })

        return response.json({ sucesso: true })
    }

    async index(request: Request, response: Response) {
        const missas = await knex('missas').select('*')

        return response.json(missas)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const missa = await knex('missas').where({ id }).first()

        if (!missa) {
            return response.status(400).json({ message: 'Missa não encontrada!' })
        }

        return response.json(missa)
    }
}

export default Missas