import { StyleSheet } from "react-native"

import { cores, fontes } from '../../styles'

const { vermelhoClaro } = cores.principais
const { branco } = cores.neutras

const { roboto } = fontes

const styles = StyleSheet.create({
	botaoPrimario: {
		alignItems: 'center',
		backgroundColor: vermelhoClaro,
		borderRadius: 4,
		height: 48,
		justifyContent: 'center',
		width: 320
	},

	txtBotao: {
		color: branco,
		fontSize: 22,
		...roboto
	}
})

export default styles