import { StyleSheet } from "react-native"

import { cores, fontes } from '../../styles'

const { branco } = cores.neutras

const { roboto } = fontes

const styles = StyleSheet.create({
	containerBtnSecundario: {
		borderColor: branco,
		borderRadius: 4,
		borderStyle: 'solid',
		borderWidth: 1
	},

	botaoSecundario: {
		alignItems: 'center',
		borderRadius: 4,
		height: 48,
		justifyContent: 'center',
		width: 280
	},

	txtBotao: {
		color: branco,
		fontSize: 22,
		...roboto
	}
})

export default styles