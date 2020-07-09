import { Request, Response } from 'express'
import knex from '../database/connection'

class Usuarios {
    async create(request: Request, response: Response) {
        const { nome, email } = request.body

        await knex('usuarios').insert({ nome, email })

        return response.json({ sucesso: true })
    }

    async index(request: Request, response: Response) {
        const usuarios = await knex('usuarios').select('*')

        return response.json(usuarios)
    }
}

export default Usuarios