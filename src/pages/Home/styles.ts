import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	viewContainer: {
		alignItems: 'center',
		flex: 1
	},

	viewTopoVermelho: {
		alignItems: 'center',
		justifyContent: 'center'
	},

	imgLogo: {
		height: 92,
		marginBottom: 16,
		resizeMode: 'contain',
		top: 16,
		width: 92
	},

	txtSagrado: {
		color: '#fff',
		fontFamily: 'Cookie_400Regular',
		fontSize: 40,
		marginHorizontal: 32,
		paddingVertical: 4,
		textAlign: 'center',
		textShadowColor: '#000',
		textShadowOffset: { width: 2, height: 4 },
		textShadowRadius: 4
	},

	btnDeslogar: {
		alignItems: 'center',
		backgroundColor: '#333',
		borderRadius: 10,
		left: 96,
		marginBottom: 24,
		padding: 5,
		width: 160
	},

	txtDeslogar: {
		color: '#eee',
		fontSize: 24,
		fontStyle: 'italic'
	},

	viewParaParticipar: {},

	txtTituloParticipar: {
		color: '#fff',
		fontSize: 24,
		fontStyle: 'italic',
		paddingBottom: 16,
		textAlign: 'center'
	},

	viewParticipar: {
		paddingLeft: 20
	},

	viewRegras: {
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 4
	},

	txtParaParticipar: {
		color: '#fff',
		fontSize: 16,
		marginLeft: 8
	}
})

export default styles