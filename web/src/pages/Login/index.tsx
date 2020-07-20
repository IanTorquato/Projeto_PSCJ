import React, { useContext, FormEvent } from 'react'

import './styles.css'
import LoginContext from '../../contexts/login'
import logo from '../../assets/logo.webp'

const Login = () => {
  const { logar } = useContext(LoginContext)

  async function entrar(event: FormEvent) {
    event.preventDefault()

    const usuario = document.querySelector<HTMLInputElement>('input#usuario')?.value.trim()
    const senha = document.querySelector<HTMLInputElement>('input#senha')?.value.trim()

    if (usuario && senha) {
      const user = { usuario, senha }
      logar(user)
    }
  }

  return (
    <section className="secLogin">
      <form onSubmit={entrar}>
        <img src={logo} alt="Brasão da Paróquia" />
        <div className="insereDados">
          <label htmlFor="usuario">Usuário:</label>
          <input type="text" id="usuario" placeholder="Insira o usuário" />
        </div>
        <div className="insereDados">
          <label htmlFor="senha">Senha:</label>
          <input type="text" id="senha" placeholder="Insira a senha" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </section>
  )
}

export default Login