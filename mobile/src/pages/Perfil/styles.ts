import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#444'
	},

	viewContainer: {
		alignItems: 'center',
		backgroundColor: '#444',
		flex: 1,
		paddingBottom: 16
	},

	viewPerfilUsuario: {
		alignItems: 'center',
		marginTop: 8
	},

	viewEditarUsuario: {
		alignItems: 'flex-end',
		marginRight: 16,
		width: '100%'
	},

	imgUsuario: {
		backgroundColor: '#333',
		borderRadius: 40,
		resizeMode: 'cover',
		height: 80,
		width: 80
	},

	txtNomeUsuario: {
		color: '#fff',
		fontFamily: 'Roboto_400Regular',
		fontSize: 22,
		fontWeight: 'bold'
	},

	txtEmailUsuario: {
		color: '#9f9f9f',
		fontFamily: 'Roboto_400Regular',
		fontSize: 14,
		fontWeight: 'bold'
	},

	txtMissas: {
		borderBottomColor: '#e41e25',
		borderBottomWidth: 1,
		borderTopColor: '#e41e25',
		borderTopWidth: 1,
		color: '#e41e25',
		fontFamily: 'Cinzel_400Regular',
		fontSize: 24,
		marginBottom: 32,
		marginTop: -88,
		paddingVertical: 8,
		textAlign: 'center',
		textShadowColor: '#000000dd',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 15,
		width: '100%'
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

	viewEditarMissa: {
		alignItems: 'flex-end',
		marginBottom: -20,
		marginRight: 8,
		width: '100%'
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

	viewPessoasCadastradas: {
		alignItems: 'center',
		flexDirection: 'row'
	},

	txtPessoasCadastradas: {
		color: '#e41e25',
		fontFamily: 'Roboto_400Regular',
		fontSize: 15,
		fontWeight: '500'
	},

	viewNadaDeMissas: {
		alignItems: 'center',
		backgroundColor: '#444',
		borderRadius: 24,
		borderStyle: 'solid',
		borderWidth: 2,
		marginTop: 16,
		padding: 16
	},

	txtNadaDeMissas: {
		fontFamily: 'Roboto_400Regular',
		fontSize: 24
	}
})

export default styles