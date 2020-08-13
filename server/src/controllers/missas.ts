import { Request, Response } from 'express'
import knex from '../database/connection'

class Missas {
	async create(request: Request, response: Response) {
		const { local_id, data, hora, max_pessoas } = request.body

		try {
			await knex('missas').insert({ local_id, data, hora, max_pessoas })

			return response.json({ mensagem: 'Missa criada com sucesso!' })
		} catch (error) {
			return response.status(500).json({ erro: 'Falha no servidor ao tentar criar missa.' })
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

				return response.status(400).json({ erro: 'Ainda não há nenhum dado para ser listado.' })
			} catch (error) {
				return response.status(400).json({ erro: 'Erro na filtragem de missas pelo usuário!' })
			}
		}

		// Filtrar missas por Local
		else if (localId) {
			try {
				if (localId > 0 && localId < 3) {
					const missasLocal = ordenaPelaData(await knex('missas').where({ local_id }))

					if (missasLocal[0]) { return response.json(missasLocal) }

					return response.status(400).json({ erro: 'Ainda não há nenhum dado para ser listado.' })
				}

				return response.status(400).json({ erro: 'Local inexistente!' })
			} catch (erro) {
				return response.status(400).json({ erro: 'Erro na filtragem de missas pelo Local!' })
			}
		}

		// Filtrar missas por quantidade
		else if (quantidadeMissas) {
			try {
				if (quantidadeMissas > 0) {

					const missas = ordenaPelaData(await knex('missas'))

					if (missas[0]) { return response.json(missas.slice(0, quantidadeMissas)) }

					return response.status(400).json({ erro: 'Ainda não há nenhum dado para ser listado.' })
				}

				return response.status(400).json({ erro: 'Número de missas inválido!' })
			} catch (erro) {
				return response.status(400).json({ erro: 'Erro na filtragem de missas por Quantidade!' })
			}
		}

		// Listar todas as missas
		else {
			try {
				const missas = ordenaPelaData(await knex('missas'))

				if (missas[0]) { return response.json(missas) }

				return response.status(400).json({ erro: 'Ainda não há nenhum dado para ser listado.' })
			} catch (error) {
				return response.status(500).json({ erro: 'Falha no servidor ao tentar listar dados da tabela "missas"!' })
			}
		}
	}

	async show(request: Request, response: Response) {
		const { id } = request.params

		try {
			const missa = await knex('missas').where({ id }).first()

			if (missa) { return response.json(missa) }

			return response.status(400).json({ erro: 'Missa não encontrada!' })
		} catch (error) {
			return response.status(500).json({ erro: 'Falha no servidor ao tentar listar uma única missa.' })
		}
	}

	async update(request: Request, response: Response) {
		const { missa_id, local_id, data, hora, max_pessoas } = request.body

		try {
			await knex('missas').where({ id: missa_id }).update({ local_id, data, hora, max_pessoas })

			return response.json({ mensagem: 'Missa atualizada com sucesso!' })
		} catch (error) {
			return response.status(500).json({ erro: 'Falha no servidor ao tentar atualizar missa.' })
		}
	}

	async delete(request: Request, response: Response) {
		const { id } = request.params
		const trx = await knex.transaction()

		try {
			// Retorna 1 se conseguiu excluir e 0 se não conseguiu, ou seja, se existia ou não a missa
			const missaExistente = await trx('missas').where({ id }).first().delete()

			if (missaExistente) {
				await trx('missa_usuario').where({ missa_id: id }).delete()

				await trx.commit()

				return response.json({ mensagem: 'Missa deletada com sucesso!' })
			}

			return response.status(400).json({ erro: 'A missa que você deseja excluir não existe!' })
		} catch (error) {
			await trx.rollback()

			return response.status(500).json({ erro: 'Falha no servidor ao tentar deletar missa.' })
		}
	}
}

export default Missas