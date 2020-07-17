import React, { createContext, useState, useEffect } from 'react'

import api from '../services/api'

interface User {
  usuario: string
  senha: string
}

interface LoginContextData {
  logado: boolean
  userr: object | null
  loading: boolean
  logar(user: User): Promise<void>
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {
  const [userr, setUserr] = useState<object | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@PSCJ:user')

    if (storagedUser) {
      setUserr(JSON.parse(storagedUser))
    }
    setLoading(false)
  }, [])

  async function logar(user: User) {
    if (userr) {
      console.log(userr)
    }
    else {
      const response = await api.post(`/login`, user)

      if (response.data.user) {
        localStorage.setItem('@PSCJ:user', JSON.stringify(response.data.user))
        setUserr(response.data)
      }
      else {
        alert(response.data.erro)
      }
    }
  }

  return (
    <LoginContext.Provider value={{ logado: !!userr, userr, loading, logar }}>
      {children}
    </LoginContext.Provider>
  )
}
export default LoginContext