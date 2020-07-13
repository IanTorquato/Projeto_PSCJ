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

    async update(request: Request, response: Response) {
        const { local_id, data, hora, max_pessoas } = request.body
        const { id } = request.params

        await knex('missas').where({ id }).update({ local_id, data, hora, max_pessoas })

        response.json({ sucesso: true })
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params

        await knex('missas').delete().where({ id })
        // JOIN await knex('missa_usuario').delete().where({id:})

        response.json({ sucesso: true })
    }
}

export default Missas