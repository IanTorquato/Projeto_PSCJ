import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ImageBackground, Image, TextInput, Alert, KeyboardAvoidingView } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'

import { useContextLogin } from '../../contexts/login'
import api from '../../services/api'

import styles from './styles'

const imgFundo = require('../../assets/fundoApp.jpg')
const logo = require('../../../assets/icon.png')

const CadastrarUsuario = () => {
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')

	const { goBack } = useNavigation()
	const { logar } = useContextLogin()

	async function cadastrar() {
		const schemaDadosCadastro = Yup.object().shape({
			nome: Yup.string().required('O campo Nome é obrigatório!').min(3, 'O nome deve conter ao menos 3 caracteres!'),
			email: Yup.string().required('O campo E-mail é obrigatório!').email('Digite um E-mail válido!')
		})

		schemaDadosCadastro.validate({ nome, email }).then(usuario => {
			api.post('usuarios', usuario).then(({ data }) => {
				// Alert("Título", "Mensagem", [{Botões}], {Opções})
				Alert.alert('Sucesso', data.mensagem,
					[{ text: "Logar Agora", onPress: () => logar({ id: 0, foto: '', nome, email }) }], { cancelable: false }
				)
			}).catch(({ response }) => {
				Alert.alert('Erro', response.data.erro)
			})
		}).catch(({ errors }) => {
			Alert.alert('Erro', errors[0])
		})
	}

	return (
		<ImageBackground source={imgFundo} style={styles.imgFundo} >
			<TouchableOpacity onPress={goBack} style={styles.btnVoltar}>
				<FontAwesome5 name="arrow-circle-left" color="#fff" size={32} />
			</TouchableOpacity>

			<ScrollView>
				<View style={styles.viewConteudo}>
					<Image source={logo} style={styles.imgLogo} />

					<KeyboardAvoidingView style={styles.containerInputs}>
						<View style={styles.containerInput}>
							<Text style={styles.txtInput}>Nome:</Text>
							<TextInput style={styles.input} placeholder="Digite seu nome"
								onChangeText={text => setNome(text.trim())} />
						</View>

						<View style={styles.containerInput}>
							<Text style={styles.txtInput}>E-mail:</Text>
							<TextInput style={styles.input} placeholder="Digite seu e-mail"
								onChangeText={text => setEmail(text.trim())} />
						</View>
					</KeyboardAvoidingView>

					<RectButton style={styles.botao} onPress={cadastrar} >
						<Text style={styles.txtBotao}>Cadastrar-se</Text>
					</RectButton>
				</View>
			</ScrollView>
		</ImageBackground>
	)
}

export default CadastrarUsuario