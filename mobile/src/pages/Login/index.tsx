import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ImageBackground, Image, TextInput, Alert, KeyboardAvoidingView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'

import { useContextLogin } from '../../contexts/login'

import styles from './styles'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

const Login = () => {
	const { goBack } = useNavigation()

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')

	const { logar } = useContextLogin()

	async function entrar() {
		try {
			const schemaDadosCadastro = Yup.object().shape({
				nome: Yup.string().trim().required('O campo Nome é obrigatório!').min(3, 'O nome deve conter ao menos 3 caracteres!'),
				email: Yup.string().trim().required('O campo E-mail é obrigatório!').email('Digite um E-mail válido!')
			})

			await schemaDadosCadastro.validate({ nome, email })
			logar({ id: 0, foto: '', nome, email })
		} catch (erro) {
			Alert.alert('Erro', erro.errors[0])
		}
	}

	return (
		<KeyboardAvoidingView style={styles.container}>
			<ImageBackground source={fundoLogin} style={styles.fundoLogin}>
				<Image source={logo} style={styles.imgLogo} />

				<TouchableOpacity onPress={goBack} style={styles.btnVoltar}>
					<FontAwesome5 name="arrow-circle-left" color="#fff" size={32} />
				</TouchableOpacity>

				<View style={styles.containerInputs}>
					<View style={styles.containerInput}>
						<Text style={styles.txtInput}>Nome:</Text>
						<TextInput style={styles.input} placeholder="Digite seu nome"
							onChangeText={text => setNome(text)} />
					</View>

					<View style={styles.containerInput}>
						<Text style={styles.txtInput}>E-mail:</Text>
						<TextInput style={styles.input} placeholder="Digite seu e-mail"
							onChangeText={text => setEmail(text)} />
					</View>
				</View>

				<RectButton style={styles.botao} onPress={entrar}>
					<Text style={styles.txtBotao}>Entrar</Text>
				</RectButton>
			</ImageBackground>
		</KeyboardAvoidingView>
	)
}

export default Login