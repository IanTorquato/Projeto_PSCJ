import { Request, Response } from 'express'

class Login {
  async login(request: Request, response: Response) {
    const user = { usuario: 'ian', senha: 'ian' }
    const { usuario, senha } = request.body

    if (user.usuario === usuario && user.senha === senha) {
      return response.json({ user })
    }
    else {
      return response.json({ erro: 'Verifique os dados e tente novamente!' })
    }
  }
}

export default Login