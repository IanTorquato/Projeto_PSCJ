import { StyleSheet } from 'react-native'

import { cores, fontes } from '../../styles'

const { branco } = cores.neutras

const { cookie } = fontes

const styles = StyleSheet.create({
	viewConteudo: {
		alignItems: 'center'
	},

	btnVoltar: {
		left: 16,
		position: 'absolute',
		top: 16,
		zIndex: 8
	},

	imgLogo: {
		height: 112,
		resizeMode: 'contain',
		marginTop: 56,
		width: 112
	},

	txtSagrado: {
		color: branco,
		...cookie,
		fontSize: 32,
		marginTop: 8,
		maxWidth: 200,
		textAlign: 'center'
	},

	viewInputs: {
		height: 128,
		justifyContent: 'space-between',
		marginTop: 104
	}
})

export default styles