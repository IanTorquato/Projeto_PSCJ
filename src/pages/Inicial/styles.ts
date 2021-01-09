import { StyleSheet } from 'react-native'

import { cores, fontes } from '../../styles'

const { branco, preto } = cores.neutras

const { cookie } = fontes

const styles = StyleSheet.create({
	viewConteudo: {
		alignItems: 'center',
		backgroundColor: preto
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
		textAlign: 'center',
	},

	containerBtns: {
		height: 112,
		justifyContent: 'space-between',
		marginTop: 136
	}
})

export default styles