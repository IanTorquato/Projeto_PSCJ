import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	fundoLogin: {
		alignItems: 'center',
		flex: 1
	},

	imgLogo: {
		height: 112,
		resizeMode: 'contain',
		top: 48,
		width: 112
	},

	fundoTxtSagrado: {
		backgroundColor: '#e41e2577',
		borderRadius: 16,
		paddingBottom: 8,
		top: 96,
		width: 312
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
		backgroundColor: '#00000077',
		borderColor: '#fff',
		borderRadius: 8,
		borderStyle: 'solid',
		borderWidth: 1,
		marginTop: 24,
		top: 180
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