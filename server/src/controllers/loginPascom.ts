import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

class LoginPascom {
  async loginPascom(request: Request, response: Response) {
    try {
      const user = { usuario: 'ian', senha: 'ian' }
      const { usuario, senha } = request.body

      const senhaEncriptada = bcrypt.hashSync(senha, 10)

      if (user.usuario === usuario && bcrypt.compareSync(user.senha, senhaEncriptada)) {
        return response.json({ user: { usuario, senha: senhaEncriptada } })
      }

      return response.json({ erro: 'Verifique os dados e tente novamente!' }).status(400)
    } catch (error) {
      return response.json({ erro: 'Falha no servidor ao tentar logar.' }).status(500)
    }
  }
}

export default LoginPascom