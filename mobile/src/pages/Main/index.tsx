import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

import styles from './styles'

const Main = () => {
	const { navigate } = useNavigation()

	return (
		<View style={styles.container}>
			<ImageBackground source={fundoLogin} style={styles.fundoLogin}>
				<Image source={logo} style={styles.imgLogo} />

				<View style={styles.fundoTxtSagrado}>
					<Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>
				</View>

				<View style={styles.containerBtns}>
					<RectButton onPress={() => { navigate('Login') }} style={styles.botao}>
						<Text style={styles.txtBotoes}>Entrar</Text>
					</RectButton>
				</View>

				<View style={styles.containerBtns}>
					<RectButton onPress={() => { navigate('CadastrarUsuario') }} style={styles.botao}>
						<Text style={styles.txtBotoes}>Cadastrar-se</Text>
					</RectButton>
				</View>
			</ImageBackground>
		</View>
	)
}

export default Main