import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	imgFundo: {
		flex: 1
	},

	btnVoltar: {
		left: 16,
		position: 'absolute',
		top: 16,
		zIndex: 8
	},

	viewConteudo: {
		alignItems: 'center'
	},

	imgLogo: {
		height: 112,
		resizeMode: 'contain',
		marginTop: 56,
		width: 112
	},

	containerInputs: {
		marginTop: '24%'
	},

	containerInput: {
		marginBottom: 16,
		width: 280
	},

	txtInput: {
		color: '#fff',
		fontSize: 14,
		left: 4,
		marginBottom: 4
	},

	input: {
		backgroundColor: '#fff',
		borderRadius: 8,
		color: '#000',
		fontSize: 18,
		height: 50,
		paddingLeft: 15
	},

	botao: {
		backgroundColor: '#e41e25',
		borderRadius: 8,
		height: 50,
		justifyContent: 'center',
		paddingHorizontal: 24,
		marginTop: '24%'
	},

	txtBotao: {
		color: '#fff',
		fontSize: 24,
		marginTop: -2
	}
})

export default styles