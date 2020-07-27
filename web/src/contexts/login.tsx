import React, { createContext, useState, useEffect } from 'react'

import api from '../services/api'

interface User {
  usuario: string
  senha: string
}

interface LoginContextData {
  logado: boolean
  loading: boolean
  logar(user: User): Promise<void>
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {
  const [usuario, setUsuario] = useState<object | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@PSCJ:user')

    if (storagedUser) {
      setUsuario(JSON.parse(storagedUser))
    }
    setLoading(false)
  }, [])

  async function logar(user: User) {
    const response = await api.post(`/login`, user)

    if (response.data.user) {
      localStorage.setItem('@PSCJ:user', JSON.stringify(response.data.user))
      setUsuario(response.data)
    }
    else {
      alert(response.data.erro)
    }
  }

  return (
    <LoginContext.Provider value={{ logado: !!usuario, loading, logar }}>
      {children}
    </LoginContext.Provider>
  )
}
export default LoginContext