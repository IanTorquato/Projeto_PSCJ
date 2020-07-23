import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

const Main = () => {
	const navigation = useNavigation()

	function paraLogin() {
		navigation.navigate('Login')
	}

	function paraCadastrarUsuario() {
		navigation.navigate('CadastrarUsuario')
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={fundoLogin} style={styles.fundoLogin}>
				<Image source={logo} style={styles.imgLogo} />

				<View style={styles.fundoTxtSagrado}>
					<Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>
				</View>

				<View style={styles.containerBtns}>
					<RectButton onPress={paraLogin} style={styles.botao}>
						<Text style={styles.txtBotoes}>Entrar</Text>
					</RectButton>
				</View>

				<View style={styles.containerBtns}>
					<RectButton onPress={paraCadastrarUsuario} style={styles.botao}>
						<Text style={styles.txtBotoes}>Cadastrar-se</Text>
					</RectButton>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	fundoLogin: {
		flex: 1,
		alignItems: 'center',
	},

	imgLogo: {
		width: 128,
		top: 24,
		resizeMode: 'contain'
	},

	fundoTxtSagrado: {
		width: 312,
		paddingBottom: 8,
		top: 32,
		backgroundColor: '#e41e2577',
		borderRadius: 16
	},

	txtSagrado: {
		fontFamily: 'Cookie_400Regular',
		fontSize: 40,
		lineHeight: 48,
		textAlign: 'center',
		color: '#fff',
		textShadowColor: '#000',
		textShadowOffset: { width: 2, height: 4 },
		textShadowRadius: 4,
		paddingVertical: 4
	},

	containerBtns: {
		borderColor: '#fff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 8,
		top: 96,
		marginTop: 24,
		backgroundColor: '#00000077'
	},

	botao: {
		width: 184,
		borderRadius: 8,
		alignItems: 'center'
	},

	txtBotoes: {
		fontFamily: 'Roboto_400Regular',
		color: '#fff',
		fontSize: 24,
		height: 48,
		top: 5
	}
});

export default Main