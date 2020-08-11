import { Request, Response } from 'express'
import knex from '../database/connection'

class Missas {
    async create(request: Request, response: Response) {
        const { local_id, data, hora, max_pessoas } = request.body

        try {
            await knex('missas').insert({ local_id, data, hora, max_pessoas })

            return response.json({ mensagem: 'Missa criada com sucesso!' })
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar criar missa.' }).status(500)
        }
    }

    async index(request: Request, response: Response) {
        const { local_id, quantMissas, usuario_id } = request.query

        const localId = Number(local_id)
        const quantidadeMissas = Number(quantMissas)

        function ordenaPelaData(missas: any[]) {
            missas.sort((a: any, b: any) => a.data >= b.data ? 1 : -1)

            return missas
        }

        // Filtrar missas de um usuário
        if (usuario_id) {
            try {
                const missas = ordenaPelaData(await knex('missas')
                    .join('missa_usuario', 'missas.id', '=', 'missa_usuario.missa_id')
                    .select('missas.id', 'missas.local_id', 'missas.data', 'missas.hora', 'missa_usuario.quantidade_pessoas')
                    .where({ usuario_id }))

                if (missas[0]) { return response.json(missas) }

                return response.json({ mensagem: 'Ainda não há nenhum dado para ser listado.' })
            } catch (error) {
                console.log(error)
                return response.json({ erro: 'Erro na filtragem de missas pelo usuário!' }).status(400)
            }
        }

        // Filtrar missas por Local
        else if (localId) {
            try {
                if (localId > 0 && localId < 3) {
                    const missasLocal = ordenaPelaData(await knex('missas').select('*').where({ local_id }))

                    if (missasLocal[0]) { return response.json(missasLocal) }

                    return response.json({ mensagem: 'Ainda não há nenhum dado para ser listado.' })
                }

                return response.json({ erro: 'Local inexistente!' }).status(400)
            } catch (erro) {
                return response.json({ erro: 'Erro na filtragem de missas pelo Local!' }).status(400)
            }
        }

        // Filtrar missas por quantidade
        else if (quantidadeMissas) {
            try {
                if (quantidadeMissas > 0) {

                    const missas = ordenaPelaData(await knex('missas').select('*'))

                    if (missas[0]) { return response.json(missas.slice(0, quantidadeMissas)) }

                    return response.json({ mensagem: 'Ainda não há nenhum dado para ser listado.' })
                }

                return response.json({ erro: 'Número de missas inválido!' }).status(400)
            } catch (erro) {
                return response.json({ erro: 'Erro na filtragem de missas por Quantidade!' }).status(400)
            }
        }

        // Listar todas as missas
        else {
            try {
                const missas = ordenaPelaData(await knex('missas').select('*'))

                if (missas[0]) { return response.json(missas) }

                return response.json({ mensagem: 'Ainda não há nenhum dado para ser listado.' })
            } catch (error) {
                return response.json({ erro: 'Falha no servidor ao tentar listar dados da tabela "missas"!' }).status(500)
            }
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        try {
            const missa = await knex('missas').where({ id }).first()

            if (!missa) { return response.json({ erro: 'Missa não encontrada!' }).status(400) }

            return response.json(missa)
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar listar uma única missa.' }).status(500)
        }
    }

    async update(request: Request, response: Response) {
        const { missa_id, local_id, data, hora, max_pessoas } = request.body

        try {
            await knex('missas').where({ id: missa_id }).update({ local_id, data, hora, max_pessoas })

            response.json({ mensagem: 'Missa atualizada com sucesso!' })
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar atualizar missa.' }).status(500)
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params
        const trx = await knex.transaction()

        try {

            await trx('missas').where({ id }).delete()
            await trx('missa_usuario').where({ missa_id: id }).delete()

            await trx.commit()

            response.json({ mensagem: 'Missa deletada com sucesso!' })
        } catch (error) {
            await trx.rollback()

            return response.json({ erro: 'Falha no servidor ao tentar deletar missa.' }).status(500)
        }
    }
}

export default Missas