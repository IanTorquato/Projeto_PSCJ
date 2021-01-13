import { StyleSheet } from 'react-native'

import { cores, fontes } from '../../styles'

const { branco, cinzaMuitoEscuro } = cores.neutras

const { cormorant } = fontes

const styles = StyleSheet.create({
	viewCabecalho: {
		backgroundColor: cinzaMuitoEscuro,
		flexDirection: 'row',
		height: 64,
		justifyContent: 'space-between',
		padding: 8
	},

	viewPSCJ: {
		alignItems: 'center',
		flexDirection: 'row'
	},

	imgLogo: {
		height: 48,
		width: 48
	},

	txtPSCJ: {
		color: branco,
		...cormorant,
		fontSize: 24
	},

	imgAvatar: {
		height: 48,
		width: 48
	}
})

export default styles