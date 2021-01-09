import React from 'react'
import { Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import BotaoPrimario from '../../components/BotaoPrimario'

import styles from './styles'
import BotaoSecundario from '../../components/BotaoSecundario'

const logo = require('../../../assets/icon.png')

const Inicial = () => {
	const { navigate } = useNavigation()

	return (
		<View style={styles.viewConteudo}>
			<Image source={logo} style={styles.imgLogo} />

			<Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>

			<View style={styles.containerBtns}>
				<BotaoPrimario text="Entrar" onPress={() => navigate('Login')} styleComplements={{ width: 280 }} />

				<BotaoSecundario text="Cadastrar-se" onPress={() => navigate('Cadastro')}
					styleComplements={{ width: 280 }} />
			</View>
		</View>
	)
}

export default Inicial