import { Request, Response } from 'express'
import knex from '../database/connection'

class Missas {
    async create(request: Request, response: Response) {
        const { local_id, data, hora, max_pessoas } = request.body

        await knex('missas').insert({ local_id, data, hora, max_pessoas })

        return response.json({ sucesso: true })
    }

    async index(request: Request, response: Response) {
        const { local_id, quantMissas } = request.query

        function ordenaPelaData(missas: any[]) {
            missas.sort((a: any, b: any) => a.data >= b.data ? 1 : -1)

            return missas
        }

        if (Number(local_id)) {
            if (Number(local_id) < 3 && Number(local_id) > 0) {
                const missasLocal = ordenaPelaData(await knex('missas').select('*').where({ local_id }))

                return response.json(missasLocal)
            }
            else {
                return response.json({ erro: 'Erro na filtragem. Verifique os parâmetros!' })
            }
        }
        else if (Number(quantMissas)) {
            if (Number(quantMissas) > 0) {

                const missas = ordenaPelaData(await knex('missas').select('*'))
                const poucasMissas = []

                for (let index = 0; index < Number(quantMissas); index++) {
                    if (missas[index] !== undefined) {
                        poucasMissas.push(missas[index])
                    }
                }

                return response.json(poucasMissas)
            }
            else {
                return response.json({ erro: 'Erro na filtragem. Verifique os parâmetros!' })
            }
        }
        else {
            const missas = ordenaPelaData(await knex('missas').select('*'))
            return response.json(missas)
        }
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
        const { missa_id, local_id, data, hora, max_pessoas } = request.body

        await knex('missas').where({ id: missa_id }).update({ local_id, data, hora, max_pessoas })

        response.json({ sucesso: true })
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params

        const trx = await knex.transaction()

        await trx('missas').where({ id }).delete()
        await trx('missa_usuario').where({ missa_id: id }).delete()

        await trx.commit()

        response.json({ sucesso: true })
    }
}

export default Missas