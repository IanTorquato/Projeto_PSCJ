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
        const { local_id, quantMissas } = request.query

        function ordenaPelaData(missas: any[]) {
            missas.sort((a: any, b: any) => a.data >= b.data ? 1 : -1)

            return missas
        }

        try {
            // Filtrar missas por Local
            if (Number(local_id)) {
                try {
                    console.log('aqui 1')
                    if (Number(local_id) < 3 && Number(local_id) > 0) {
                        const missasLocal = ordenaPelaData(await knex('missas').select('*').where({ local_id }))

                        return response.json(missasLocal)
                    } else {
                        return response.json({ erro: 'Local inexistente!' }).status(400)
                    }
                } catch (erro) {
                    return response.json({ erro: 'Erro na filtragem de missas pelo Local!' }).status(400)
                }
            }

            // Filtrar missas por quantidade
            else if (Number(quantMissas)) {
                try {
                    if (Number(quantMissas) > 0) {

                        const missas = ordenaPelaData(await knex('missas').select('*'))
                        const poucasMissas = []

                        for (let index = 0; index < Number(quantMissas); index++) {
                            if (missas[index] !== undefined) {
                                poucasMissas.push(missas[index])
                            }
                        }

                        return response.json(poucasMissas)
                    } else {
                        return response.json({ erro: 'Número de missas inválido!' }).status(400)
                    }
                } catch (erro) {
                    return response.json({ erro: 'Erro na filtragem de missas por Quantidade!' }).status(400)
                }
            }

            // Listar todas as missas
            else {
                const missas = ordenaPelaData(await knex('missas').select('*'))
                return response.json(missas)
            }
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar listar dados da tabela "missas"!' }).status(500)
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        try {
            const missa = await knex('missas').where({ id }).first()

            if (!missa) {
                return response.json({ erro: 'Missa não encontrada!' }).status(400)
            }
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

        try {
            const trx = await knex.transaction()

            await trx('missas').where({ id }).delete()
            await trx('missa_usuario').where({ missa_id: id }).delete()

            await trx.commit()

            response.json({ mensagem: 'Missa deletada com sucesso!' })
        } catch (error) {
            return response.json({ erro: 'Falha no servidor ao tentar deletar missa.' }).status(500)
        }
    }
}

export default Missas