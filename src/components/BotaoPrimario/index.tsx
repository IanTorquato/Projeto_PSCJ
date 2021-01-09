import React from 'react'
import { Text, ViewStyle } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'

import styles from './styles'

interface PropsBtnPrimario extends Readonly<RectButtonProperties> {
	text: string
	styleComplements?: ViewStyle
}

const BotaoPrimario: React.FC<PropsBtnPrimario> = ({ text, styleComplements, ...rest }) => {
	return (
		<RectButton style={{ ...styles.botaoPrimario, ...styleComplements }} {...rest}>
			<Text style={styles.txtBotao}>{text}</Text>
		</RectButton>
	)
}

export default BotaoPrimario