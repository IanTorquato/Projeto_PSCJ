import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, Alert, KeyboardAvoidingView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'

import { useContextLogin } from '../../contexts/login'
import InputText from '../../components/InputText'
import BotaoPrimario from '../../components/BotaoPrimario'

import styles from './styles'

const logo = require('../../../assets/icon.png')

const Login = () => {
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')

	const { goBack } = useNavigation()
	const { logar } = useContextLogin()

	function entrar() {
		const schemaDadosCadastro = Yup.object().shape({
			nome: Yup.string().required('O campo Nome é obrigatório!').min(3, 'O nome deve conter ao menos 3 caracteres!'),
			email: Yup.string().required('O campo E-mail é obrigatório!').email('Digite um E-mail válido!')
		})

		schemaDadosCadastro.validate({ nome, email }, { abortEarly: false }).then(() => {
			logar({ nome, email })
		}).catch(({ errors }) => {
			Alert.alert('Erro', errors.reduce((stringReturn: string, erro: string) => stringReturn += `\n\n${erro}`))
		})
	}

	return (
		<KeyboardAvoidingView keyboardVerticalOffset={48} behavior="position" contentContainerStyle={styles.viewConteudo}>
			<TouchableOpacity onPress={goBack} style={styles.btnVoltar}>
				<AntDesign name="left" color="#fff" size={32} />
			</TouchableOpacity>

			<Image source={logo} style={styles.imgLogo} />

			<Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>

			<View style={styles.viewInputs}>
				<InputText textPlaceholder="Nome Completo" onChangeText={text => setNome(text.trim())} inputValueEmpty={nome}
					autoCapitalize="words" autoCompleteType="name" />
				<InputText textPlaceholder="E-mail" onChangeText={text => setEmail(text.trim())} inputValueEmpty={email}
					keyboardType="email-address" autoCapitalize="none" autoCompleteType="email" />
			</View>

			<BotaoPrimario onPress={entrar} text="Entrar" styleComplements={{ marginTop: 64 }} />
		</KeyboardAvoidingView>
	)
}

export default Login