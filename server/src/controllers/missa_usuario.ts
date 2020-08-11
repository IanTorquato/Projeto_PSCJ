import { Request, Response } from 'express'
import knex from '../database/connection'

class MissaUsuario {
    async create(request: Request, response: Response) {
        const trx = await knex.transaction()

        try {
            const { missa_id, usuario_id, quantidade_pessoas, pessoas_cadastradas } = request.body

            const relacionamentoExistente = await trx('missa_usuario').select('*').where({ missa_id, usuario_id }).first()

            if (relacionamentoExistente) {
                return response.json({
                    erro: 'Você já está cadastrado nesta missa! Se deseja alterar a quantidade de pessoas, vá até "Perfil".'
                }).status(400)
            }

            const pessoasCadastradas = pessoas_cadastradas + quantidade_pessoas

            await trx('missa_usuario').insert({ missa_id, usuario_id, quantidade_pessoas })
            await trx('missas').where({ id: missa_id }).update({ pessoas_cadastradas: pessoasCadastradas })

            await trx.commit()

            return response.json({ mensagem: 'Você foi contabilizado com sucesso!!' })
        } catch (error) {
            await trx.rollback()

            return response.json({ erro: 'Falha no servidor ao tentar criar o relacionamento missa-usuario.' }).status(500)
        }
    }

    async index(request: Request, response: Response) {
        try {
            const missaUsuario = await knex('missa_usuario').select('*')

            if (missaUsuario) { response.json(missaUsuario) }

            return response.json({ mensagem: 'Ainda não há nenhum dado para ser listado.' })
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar listar o relacionamento missa-usuario.' }).status(500)
        }
    }
}

export default MissaUsuario