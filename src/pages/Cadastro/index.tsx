import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'

import { useContextLogin } from '../../contexts/login'
import api from '../../services/api'
import InputText from '../../components/InputText'
import BotaoPrimario from '../../components/BotaoPrimario'

import styles from './styles'

const logo = require('../../../assets/icon.png')

const CadastrarUsuario = () => {
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')

	const { goBack } = useNavigation()
	const { logar } = useContextLogin()

	function cadastrar() {
		const schemaDadosCadastro = Yup.object().shape({
			nome: Yup.string().required('O campo Nome é obrigatório!').min(3, 'O nome deve conter ao menos 3 caracteres!'),
			email: Yup.string().required('O campo E-mail é obrigatório!').email('Digite um E-mail válido!')
		})

		schemaDadosCadastro.validate({ nome, email }, { abortEarly: false }).then(usuario => {
			api.post('usuarios', usuario).then(({ data }) => {
				// Alert("Título", "Mensagem", [{text: 'txtBtn', onPress: função}], {Opções (cancelable: false)})
				Alert.alert('Sucesso', data.mensagem,
					[{ text: "Logar Agora", onPress: () => logar({ nome, email }) }], { cancelable: false }
				)
			}).catch(({ response }) => {
				Alert.alert('Erro', response.data.erro)
			})
		}).catch(({ errors }) => {
			Alert.alert('Erro', errors.reduce((stringReturn: string, erro: string) => stringReturn += `\n\n${erro}`))
		})
	}

	return (
		<View style={styles.viewConteudo}>
			<TouchableOpacity onPress={goBack} style={styles.btnVoltar}>
				<AntDesign name="left" color="#fff" size={32} />
			</TouchableOpacity>

			<Image source={logo} style={styles.imgLogo} />

			<Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>

			<View style={styles.viewInputs}>
				<InputText textPlaceholder="Nome Completo" onChangeText={text => setNome(text.trim())} inputValueEmpty={nome}
					autoCapitalize="words" />
				<InputText textPlaceholder="E-mail" onChangeText={text => setEmail(text.trim())} inputValueEmpty={email}
					keyboardType="email-address" autoCapitalize="none" />
			</View>

			<BotaoPrimario onPress={cadastrar} text="Cadastrar-se" styleComplements={{ marginTop: 64 }} />
		</View>
	)
}

export default CadastrarUsuario