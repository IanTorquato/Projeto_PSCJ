import React from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

const Main = () => {
	const { navigate } = useNavigation()

	return (
		<ImageBackground source={fundoLogin} style={styles.imgFundo}>
			<ScrollView>
				<View style={styles.viewConteudo}>
					<Image source={logo} style={styles.imgLogo} />

					<View style={styles.fundoTxtSagrado}>
						<Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>
					</View>

					<View style={styles.containerBtns}>
						<View style={styles.bordaBtns} >
							<RectButton onPress={() => { navigate('Login') }} style={styles.botao}>
								<Text style={styles.txtBotoes}>Entrar</Text>
							</RectButton>
						</View>

						<View style={styles.bordaBtns} >
							<RectButton onPress={() => { navigate('CadastrarUsuario') }} style={styles.botao}>
								<Text style={styles.txtBotoes}>Cadastrar-se</Text>
							</RectButton>
						</View>
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
	)
}

export default Main