import { Request, Response } from 'express'
import knex from '../database/connection'

class Locais {
    async index(request: Request, response: Response) {
        try {
            const locais = await knex('locais').select('*')

            const locaisSerializados = locais.map(local => {
                return {
                    id: local.id, nome: local.nome, imagem_url: `http://localhost:3333/uploads/${local.imagem}`
                }
            })

            return response.json(locaisSerializados)
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar listar locais.' }).status(500)
        }
    }
}

export default Locais