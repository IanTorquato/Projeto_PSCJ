import { Request, Response } from 'express'
import knex from '../database/connection'

class Usuarios {
    async create(request: Request, response: Response) {
        const { nome, email } = request.body

        try {
            const usuarioExistente = await knex('usuarios').where({ email }).first()

            if (usuarioExistente) { return response.json({ erro: 'Este e-mail já está em uso!' }).status(400) }

            await knex('usuarios').insert({ nome, email })

            return response.json({ mensagem: 'Usuário criado com sucesso!' })
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar criar usuário.' }).status(500)
        }
    }

    async loginUsuario(request: Request, response: Response) {
        const { nome, email } = request.body

        try {
            const usuario = await knex('usuarios').where({ nome, email }).first()

            if (!usuario) { return response.json({ erro: 'Usuário não encontrado!' }).status(400) }

            return response.json(usuario)
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar logar.' }).status(500)
        }
    }

    async index(request: Request, response: Response) {
        try {
            const usuarios = await knex('usuarios').select('*')

            if (usuarios[0]) { return response.json(usuarios) }

            return response.json({ mensagem: 'Ainda não há nenhum dado para ser listado.' })
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar listar usuários.' }).status(500)
        }
    }
}

export default Usuarios