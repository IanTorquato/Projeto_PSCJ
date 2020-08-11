import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  fundoLogin: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 48
  },

  btnVoltar: {
    left: 16,
    position: 'absolute',
    top: 16
  },

  imgLogo: {
    height: 112,
    resizeMode: 'contain',
    marginTop: -80,
    width: 112
  },

  containerInputs: {
    marginTop: 120
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
    marginTop: 80
  },

  txtBotao: {
    color: '#fff',
    fontSize: 24,
    marginTop: -2
  }
})

export default styles