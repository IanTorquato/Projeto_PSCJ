import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { FontAwesome5 as Fa } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'

import { useContextLogin } from '../../contexts/login'
import api from '../../services/api'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

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
					[{ text: "Logar Agora", onPress: () => logar({ id: 0, nome, email }) }], { cancelable: false }
				)
			}
		} catch (erro) {
			if (erro instanceof Yup.ValidationError) {
				Alert.alert('Erro', erro.errors[0])
			}
			else if (String(erro) === 'Error: Network Error') {
				Alert.alert('Erro', 'Erro na conexão... Verifique sua internet')
			}
			else {
				Alert.alert('Erro', String(erro))
			}
		}
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={fundoLogin} style={styles.fundoLogin}>
				<Image source={logo} style={styles.imgLogo} />

				<TouchableOpacity onPress={handleNavigateBack} style={styles.btnVoltar}>
					<Fa name="arrow-circle-left" color="#fff" size={32} />
				</TouchableOpacity>

				<View style={styles.containerInputs}>
					<Text style={styles.txtInput}>Nome:</Text>
					<TextInput style={styles.input} placeholder="Digite seu nome"
						onChange={event => setNome(event.nativeEvent.text)} />
				</View>

				<View style={styles.containerInputs}>
					<Text style={styles.txtInput}>E-mail:</Text>
					<TextInput style={styles.input} placeholder="Digite seu e-mail"
						onChange={event => setEmail(event.nativeEvent.text)} />
				</View>

				<RectButton style={styles.botao} onPress={cadastrar} >
					<Text style={styles.txtBotao}>Cadastrar-se</Text>
				</RectButton>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	fundoLogin: {
		alignItems: 'center',
		flex: 1
	},

	btnVoltar: {
		left: 16,
		position: 'absolute',
		top: 16
	},

	imgLogo: {
		height: 112,
		resizeMode: 'contain',
		top: 48,
		width: 112
	},

	containerInputs: {
		marginBottom: 16,
		top: 120,
		width: 280
	},

	txtInput: {
		color: '#fff',
		fontSize: 14,
		left: 4,
		marginBottom: 4
	},

	input: {
		backgroundColor: '#fff',
		borderRadius: 8,
		color: '#000',
		fontSize: 18,
		height: 50,
		paddingLeft: 15
	},

	botao: {
		backgroundColor: '#e41e25',
		borderRadius: 8,
		height: 50,
		justifyContent: 'center',
		paddingHorizontal: 24,
		top: 200
	},

	txtBotao: {
		color: '#fff',
		fontSize: 24,
		top: -2
	}
})

export default CadastrarUsuario