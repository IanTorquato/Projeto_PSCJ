import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	imgFundo: {
		alignItems: 'center',
		flex: 1
	},

	viewConteudo: {
		alignItems: 'center'
	},

	imgLogo: {
		height: 112,
		marginTop: 48,
		resizeMode: 'contain',
		width: 112
	},

	fundoTxtSagrado: {
		backgroundColor: '#e41e2577',
		borderRadius: 16,
		marginTop: '16%',
		paddingBottom: 8,
		width: '90%'
	},

	txtSagrado: {
		color: '#fff',
		fontFamily: 'Cookie_400Regular',
		fontSize: 40,
		lineHeight: 48,
		paddingVertical: 4,
		textAlign: 'center',
		textShadowColor: '#000',
		textShadowOffset: { width: 2, height: 4 },
		textShadowRadius: 4
	},

	containerBtns: {
		marginTop: '24%'
	},

	bordaBtns: {
		backgroundColor: '#00000077',
		borderColor: '#fff',
		borderRadius: 8,
		borderStyle: 'solid',
		borderWidth: 1,
		marginBottom: 16
	},

	botao: {
		alignItems: 'center',
		borderRadius: 8,
		width: 184
	},

	txtBotoes: {
		color: '#fff',
		fontFamily: 'Roboto_400Regular',
		fontSize: 24,
		height: 48,
		top: 5
	}
})

export default styles