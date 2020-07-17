import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

class Login {
  async login(request: Request, response: Response) {
    const user = { usuario: 'ian', senha: 'ian' }
    const { usuario, senha } = request.body

    const senhaEncriptada = bcrypt.hashSync(senha, 10)

    if (user.usuario === usuario && bcrypt.compareSync(user.senha, senhaEncriptada)) {
      return response.json({ user: { usuario, senha: senhaEncriptada } })
    }
    else {
      return response.json({ erro: 'Verifique os dados e tente novamente!' })
    }
  }
}

export default Login