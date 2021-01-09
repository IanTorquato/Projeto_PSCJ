import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#444'
	},
	viewContainer: {
		alignItems: 'center',
		backgroundColor: '#444',
		flex: 1,
		paddingVertical: 16
	},

	txtMissas: {
		borderBottomColor: '#ffb02c',
		borderBottomWidth: 1,
		borderTopColor: '#ffb02c',
		borderTopWidth: 1,
		color: '#ffb02c',
		fontSize: 40,
		paddingVertical: 8,
		textAlign: 'center',
		textShadowColor: '#000000dd',
		textShadowOffset: { width: 1, height: 1 },

		textShadowRadius: 15,
		width: '100%'
	},

	viewFiltro: {
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 8
	},

	viewRadio: {
		alignItems: 'center',
		flexDirection: 'row',
		marginLeft: 8
	},

	txtFiltro: {
		color: '#fff',
		fontFamily: 'Roboto_400Regular',
		fontSize: 16
	},

	viewMissa: {
		borderRadius: 10,
		flexDirection: 'row',
		height: 88,
		marginVertical: 4,
		width: 328
	},

	imgLocal: {
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
		height: 88,
		resizeMode: 'cover',
		width: 120
	},

	viewDadosMissa: {
		alignItems: 'center',
		backgroundColor: '#eee',
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
		justifyContent: 'center',
		width: 208
	},

	txtLocal: {
		fontFamily: 'Roboto_400Regular',
		fontSize: 20,
		fontWeight: 'bold'
	},

	viewDataHora: {
		flexDirection: 'row'
	},

	viewValueDataHora: {
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 4
	},

	txtDataHora: {
		color: '#555',
		fontFamily: 'Roboto_400Regular',
		fontSize: 15,
		fontWeight: 'bold'
	},

	txtValueDataHora: {
		color: '#555',
		fontFamily: 'Roboto_400Regular',
		fontSize: 15
	},

	viewQuantPessoas: {
		alignItems: 'center',
		flexDirection: 'row'
	},

	txtQuantPessoas: {
		color: '#e41e25',
		fontFamily: 'Roboto_400Regular',
		fontSize: 15,
		fontWeight: '500'
	},

	viewNadaDeMissas: {
		alignItems: 'center',
		backgroundColor: '#444',
		borderColor: '#d5d5d5',
		borderRadius: 24,
		borderStyle: 'solid',
		borderWidth: 2,
		marginTop: 16,
		padding: 16
	},

	txtNadaDeMissas: {
		color: '#d5d5d5',
		fontFamily: 'Roboto_400Regular',
		fontSize: 24
	}
})

export default styles