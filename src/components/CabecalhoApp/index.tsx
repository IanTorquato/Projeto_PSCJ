import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useContextLogin } from '../../contexts/login'

import styles from './styles'

const logo = require('../../../assets/icon.png')

const CabecalhoApp: React.FC = () => {
	const { usuario, deslogar } = useContextLogin()

	const { navigate } = useNavigation()

	return (
		<View style={styles.viewCabecalho}>
			<View style={styles.viewPSCJ} onTouchEnd={deslogar}>
				<Image source={logo} style={styles.imgLogo} />
				<Text style={styles.txtPSCJ}>PSCJ</Text>
			</View>

			<TouchableOpacity onPress={() => navigate('Perfil')}>
				<Image source={{ uri: usuario?.foto }} style={styles.imgAvatar} />
			</TouchableOpacity>
		</View>
	)
}

export default CabecalhoApp