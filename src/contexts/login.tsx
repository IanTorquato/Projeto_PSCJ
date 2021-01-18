import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'
import { AxiosResponse } from 'axios'
import base64 from 'react-native-base64'
import { compareAsc, fromUnixTime } from 'date-fns'

import api from '../services/api'

interface DadosLogin {
	nome: string
	email: string
}

interface Usuario extends DadosLogin {
	id: number
	foto: string
	created_at: string
	updated_at: string
}

interface ResponseData {
	usuario: Usuario
	token: string
}

interface LoginContextData {
	usuario: Usuario | null,
	loading: boolean,
	logar(dadosLogin: DadosLogin): Promise<void>,
	deslogar(): void
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

const LoginProvider: React.FC = ({ children }) => {
	const [usuario, setUsuario] = useState<Usuario | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		(async () => {
			const [userStorage, tokenStorage] = await AsyncStorage.multiGet(['@PSCJ:user', '@PSCJ:token'])

			const user = userStorage[1]
			const token = tokenStorage[1]

			if (user && token) {
				const { exp } = JSON.parse(base64.decode(token.split('.')[1]))

				const dataVencimentoToken = fromUnixTime(exp)

				if (compareAsc(dataVencimentoToken, new Date()) > 0) {
					api.defaults.headers.Authorization = `Bearer ${token}`

					setUsuario(JSON.parse(user))
				} else {
					await AsyncStorage.clear().then(() => setUsuario(null))

					Alert.alert('Tempo esgotado', 'Infelizmente, sua sessão expirou.   Por favor faça Login novamente.')
				}
			}

			setLoading(false)
		})()
	}, [])

	async function logar(dadosLogin: DadosLogin) {
		api.post(`/login_usuario`, dadosLogin).then(({ data }: AxiosResponse<ResponseData>) => {
			api.defaults.headers.Authorization = `Bearer ${data.token}`
			setUsuario(data.usuario)

			AsyncStorage.setItem('@PSCJ:user', JSON.stringify(data.usuario))
			AsyncStorage.setItem('@PSCJ:token', data.token)
		}).catch(({ response }) => {
			Alert.alert('Erro', response.data.erro)
		})
	}

	function deslogar() {
		AsyncStorage.clear().then(() => setUsuario(null))
	}

	return (
		<LoginContext.Provider value={{ usuario, loading, logar, deslogar }}>
			{children}
		</LoginContext.Provider>
	)
}

const useContextLogin = () => useContext(LoginContext)

export { LoginProvider, useContextLogin }