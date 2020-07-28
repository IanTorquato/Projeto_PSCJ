import { Request, Response } from 'express'
import Knex from 'knex'

class LoginUsuario {
  async loginUsuario(request: Request, response: Response) {
    const { nome, email } = request.body
  }
}

export default LoginUsuario