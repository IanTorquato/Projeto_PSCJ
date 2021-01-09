import { StyleSheet } from 'react-native'

import { cores, fontes } from '../../styles'

const { branco, preto, cinzaEscuro } = cores.neutras

const { roboto } = fontes

const styles = StyleSheet.create({
	viewInputText: {
		position: 'relative',
		justifyContent: 'center'
	},

	inputText: {
		borderColor: branco,
		borderRadius: 4,
		borderStyle: 'solid',
		borderWidth: 1,
		color: branco,
		fontSize: 16,
		height: 48,
		paddingLeft: 16,
		...roboto,
		width: 320
	},

	txtInputText: {
		backgroundColor: preto,
		color: cinzaEscuro,
		fontSize: 16,
		left: 8,
		paddingHorizontal: 8,
		position: 'absolute',
		...roboto
	},

	txtInputTextHover: {
		color: branco,
		transform: [{ translateX: 8 }, { translateY: -24 }]
	}
})

export default styles