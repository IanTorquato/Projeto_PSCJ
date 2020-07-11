import React, { createContext, useState, useEffect } from 'react'

import { login } from '../services/login'

interface LoginContextData {
  logado: boolean
  user: object | null
  loading: boolean
  logar(): Promise<void>
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@PSCJ:user')

    if (storagedUser) {
      setUser(JSON.parse(storagedUser))
    }
    setLoading(false)
  }, [])

  async function logar() {
    const response = await login()

    setUser(response.user)

    localStorage.setItem('@PSCJ:user', JSON.stringify(response.user))
  }

  return (
    <LoginContext.Provider value={{ logado: !!user, user, loading, logar }}>
      {children}
    </LoginContext.Provider>
  )
}
export default LoginContext