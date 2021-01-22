import { StyleSheet } from 'react-native'

import { cores, fontes } from '../../styles'

const { branco } = cores.neutras

const { cookie } = fontes

const styles = StyleSheet.create({
	viewConteudo: {
		alignItems: 'center'
	},

	imgLogo: {
		height: 128,
		marginTop: 128,
		resizeMode: 'contain',
		width: 96
	},

	txtSagrado: {
		color: branco,
		...cookie,
		fontSize: 48,
		maxWidth: 280,
		textAlign: 'center'
	},

	btnsInicio: {
		width: 280
	},

	btnEntrar: {
		marginBottom: 16,
		marginTop: 136
	}
})

export default styles