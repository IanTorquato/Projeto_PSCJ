import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

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

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	fundoLogin: {
		alignItems: 'center',
		flex: 1
	},

	imgLogo: {
		height: 112,
		resizeMode: 'contain',
		top: 48,
		width: 112
	},

	fundoTxtSagrado: {
		backgroundColor: '#e41e2577',
		borderRadius: 16,
		paddingBottom: 8,
		top: 96,
		width: 312
	},

	txtSagrado: {
		color: '#fff',
		fontFamily: 'Cookie_400Regular',
		fontSize: 40,
		lineHeight: 48,
		paddingVertical: 4,
		textAlign: 'center',
		textShadowColor: '#000',
		textShadowOffset: { width: 2, height: 4 },
		textShadowRadius: 4
	},

	containerBtns: {
		backgroundColor: '#00000077',
		borderColor: '#fff',
		borderRadius: 8,
		borderStyle: 'solid',
		borderWidth: 1,
		marginTop: 24,
		top: 180
	},

	botao: {
		alignItems: 'center',
		borderRadius: 8,
		width: 184
	},

	txtBotoes: {
		color: '#fff',
		fontFamily: 'Roboto_400Regular',
		fontSize: 24,
		height: 48,
		top: 5
	}
})

export default Main