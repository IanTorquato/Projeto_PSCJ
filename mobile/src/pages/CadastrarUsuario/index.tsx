import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, Alert, KeyboardAvoidingView, Platform }
	from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'

import { useContextLogin } from '../../contexts/login'
import api from '../../services/api'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

import styles from './styles'

const CadastrarUsuario = () => {
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')

	const navigation = useNavigation()
	const { logar } = useContextLogin()

	function handleNavigateBack() {
		navigation.goBack()
	}

	async function cadastrar() {
		try {
			const schemaDadosCadastro = Yup.object().shape({
				nome: Yup.string().trim().required('O campo Nome é obrigatório!').min(3, 'O nome deve conter ao menos 3 caracteres!'),
				email: Yup.string().trim().required('O campo E-mail é obrigatório!').email('Digite um E-mail válido!')
			})

			const usuario = await schemaDadosCadastro.validate({ nome, email })
			const { data } = await api.post('usuarios', usuario)

			if (data.erro) {
				Alert.alert('Erro', data.erro)
			} else {
				// Alert("Título", "Mensagem", [{Botões}], {Opções})
				Alert.alert('Sucesso', data.mensagem,
					[{ text: "Logar Agora", onPress: () => logar({ id: 0, foto: '', nome, email }) }], { cancelable: false }
				)
			}
		} catch (erro) {
			if (erro instanceof Yup.ValidationError) {
				Alert.alert('Erro', erro.errors[0])
			}
			else if (String(erro) === 'Error: Network Error') {
				Alert.alert('Erro', 'Erro na conexão...')
			}
			else {
				Alert.alert('Erro', String(erro))
			}
		}
	}

	return (
		<KeyboardAvoidingView style={styles.container}>
			<ImageBackground source={fundoLogin} style={styles.fundoLogin} >
				<Image source={logo} style={styles.imgLogo} />

				<TouchableOpacity onPress={handleNavigateBack} style={styles.btnVoltar}>
					<FontAwesome5 name="arrow-circle-left" color="#fff" size={32} />
				</TouchableOpacity>

				<View style={styles.containerInputs}>
					<View style={styles.containerInput}>
						<Text style={styles.txtInput}>Nome:</Text>
						<TextInput style={styles.input} placeholder="Digite seu nome"
							onChange={event => setNome(event.nativeEvent.text)} />
					</View>

					<View style={styles.containerInput}>
						<Text style={styles.txtInput}>E-mail:</Text>
						<TextInput style={styles.input} placeholder="Digite seu e-mail"
							onChange={event => setEmail(event.nativeEvent.text)} />
					</View>
				</View>

				<RectButton style={styles.botao} onPress={cadastrar} >
					<Text style={styles.txtBotao}>Cadastrar-se</Text>
				</RectButton>
			</ImageBackground>
		</KeyboardAvoidingView>
	)
}

export default CadastrarUsuario