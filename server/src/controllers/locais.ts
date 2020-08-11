import { Request, Response } from 'express'
import knex from '../database/connection'

class Locais {
    async index(request: Request, response: Response) {
        try {
            const locais = await knex('locais').select('*')

            if (locais[0]) {
                const locaisSerializados = locais.map(local => ({
                    id: local.id, nome: local.nome, imagem_url: `http://localhost:3333/uploads/${local.imagem}`
                }))

                return response.json(locaisSerializados)
            }

            return response.json({ mensagem: 'Ainda não há nenhum dado para ser listado.' })
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar listar locais.' }).status(500)
        }
    }
}

export default Locais