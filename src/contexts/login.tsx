import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'

import api from '../services/api'

interface DadosLogin {
	nome: string
	email: string
}

interface Usuario extends DadosLogin {
	id: number
	foto: string
}

interface LoginContextData {
	usuario: Usuario | null,
	loading: boolean,
	logar(dadosLogin: DadosLogin): Promise<void>,
	deslogar(): Promise<void>
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

const LoginProvider: React.FC = ({ children }) => {
	const [usuario, setUsuario] = useState<Usuario | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		(async () => {
			const usuarioLogado = await AsyncStorage.getItem('@PSCJ:user')

			if (usuarioLogado) { setUsuario(JSON.parse(usuarioLogado)) }

			setLoading(false)
		})()
	}, [])

	async function logar(dadosLogin: DadosLogin) {
		api.post(`/login_usuario`, dadosLogin).then(({ data }) => {
			setUsuario(data)

			AsyncStorage.setItem('@PSCJ:user', JSON.stringify(data))
		}).catch(({ response }) => {
			Alert.alert('Erro', response.data.erro)
		})
	}

	async function deslogar() {
		await AsyncStorage.clear()
		setUsuario(null)
	}

	return (
		<LoginContext.Provider value={{ usuario, loading, logar, deslogar }}>
			{children}
		</LoginContext.Provider>
	)
}

const useContextLogin = () => useContext(LoginContext)

export { LoginProvider, useContextLogin }