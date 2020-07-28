import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../services/api'

interface Usuario {
  id: number,
  nome: string,
  email: string
}

interface LoginContextData {
  logado: boolean,
  usuario: Usuario | null,
  loading: boolean,
  logar(usuario: Usuario): Promise<void>,
  deslogar(): void
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {
  const [stateUsuario, setStateUsuario] = useState<Usuario | null>(null)
  const [stateLoading, setStateLoading] = useState(true)

  useEffect(() => {
    async function verificaUsuarioLogado() {
      const usuarioLogado = await AsyncStorage.getItem('@PSCJ:user')

      if (usuarioLogado) {
        setStateUsuario(JSON.parse(usuarioLogado))
      }

      await new Promise(resolve => setTimeout(resolve, 2000))

      setStateLoading(false)
    }

    verificaUsuarioLogado()
  }, [])

  async function logar(usuario: Usuario) {
    const response = await api.post(`/usuarios/login`, usuario)

    if (response.data.nome && response.data.email) {
      setStateUsuario(response.data)
      await AsyncStorage.setItem('@PSCJ:user', JSON.stringify(response.data))
    }
    else (
      alert(response.data.erro)
    )
  }

  async function deslogar() {
    await AsyncStorage.clear()
    setStateUsuario(null)
  }

  return (
    <LoginContext.Provider value={{ logado: !!stateUsuario, usuario: stateUsuario, loading: stateLoading, logar, deslogar }}>
      {children}
    </LoginContext.Provider>
  )
}

export function useContextLogin() {
  const context = useContext(LoginContext)

  return context
}