import { StyleSheet } from 'react-native'

import { cores, fontes } from '../../styles'

const { amareloClaro } = cores.principais
const { branco, cinzaMuitoEscuro } = cores.neutras

const { cormorant, cormorantBold, merriweather, oswald, roboto, shadows } = fontes

const styles = StyleSheet.create({
	viewHome: {
		paddingHorizontal: 16
	},

	txtTitulosHome: {
		color: branco,
		fontSize: 32,
		lineHeight: 46,
		...oswald,
		marginBottom: 24
	},

	// viewPickerLocalidades: {
	// 	alignItems: 'center',
	// 	flexDirection: 'row'
	// },

	// pickerLocalidades: {
	// 	color: branco,
	// 	height: 24,
	// 	paddingBottom: 24,
	// 	width: 152
	// },

	viewMissas: {
		marginHorizontal: -4
	},

	viewBorda: {
		borderRadius: 4,
		borderStyle: 'solid',
		borderWidth: 1,
		marginHorizontal: 4,
	},

	btnMissa: {
		backgroundColor: cinzaMuitoEscuro,
		borderRadius: 4,
		height: 232,
		width: 176
	},

	imgLocal: {
		borderTopRightRadius: 4,
		borderTopLeftRadius: 4,
		height: 120,
	},

	viewDadosMissa: {
		flex: 1,
		paddingHorizontal: 8
	},

	txtNomeMissa: {
		color: branco,
		...cormorantBold,
		fontSize: 16,
		marginVertical: 8,
		textAlign: 'center'
	},

	viewIconDados: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8,
		marginHorizontal: 8
	},

	viewDeixarEmLinha: {
		alignItems: 'center',
		flexDirection: 'row'
	},

	txtDadosMissa: {
		color: branco,
		fontSize: 12,
		marginLeft: 4,
		...merriweather
	},

	viewListaMissas: {
		backgroundColor: '#5566aaaa',
		marginHorizontal: 40,
		marginTop: 48,
		position: 'relative'
	},

	txtListaMissas: {
		backgroundColor: '#550615aa',
		color: branco,
		fontSize: 18,
		maxWidth: 280,
		...shadows,
		textAlign: 'center'
	},

	btnListaMissas: {
		backgroundColor: amareloClaro,
		marginBottom: 56,
		marginTop: 24,
		width: 208
	},

	viewOrientacao: {
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 12
	},

	imgOrientacao: {
		alignItems: 'center',
		backgroundColor: '#e41325',
		borderRadius: 100,
		height: 40,
		justifyContent: 'center',
		padding: 4,
		width: 40
	},

	txtOrientacao: {
		color: branco,
		...cormorant,
		fontSize: 20,
		marginLeft: 8
	}
})

export default styles