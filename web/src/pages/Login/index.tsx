import React, { useContext } from 'react'
import './styles.css'

import Footer from '../../components/Footer'
import LoginContext from '../../contexts/login'

const Login = () => {
  const { logar } = useContext(LoginContext)

  async function handleLogin() {
    logar()
  }

  return (
    <>
      <section className="secLogin">
        <input type="button" value="Logar" className="btnLogar" onClick={handleLogin} />
      </section>
      <Footer />
    </>
  )
}

export default Login