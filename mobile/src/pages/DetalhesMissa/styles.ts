import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#595959',
    flex: 1
  },

  btnVoltar: {
    left: 16,
    position: 'absolute',
    top: 16
  },

  viewDetalhesMissa: {
    height: 304,
    marginTop: 72,
    width: 312
  },

  imgLocal: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 216,
    resizeMode: 'cover',
    width: 312
  },

  viewDadosMissa: {
    alignItems: 'center',
    backgroundColor: '#333',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    height: 88,
    width: 312
  },

  txtLocal: {
    color: '#fff',
    fontFamily: 'Lora_400Regular',
    fontSize: 24
  },

  viewContainDataHora: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  viewDataHora: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 0
  },

  txtData: {
    marginRight: 16
  },

  txtDataHora: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4
  },

  txtValueDataHora: {
    fontWeight: 'normal'
  },

  txtReserveVaga: {
    borderBottomColor: '#44a4eb',
    borderBottomWidth: 1,
    borderTopColor: '#44a4eb',
    borderTopWidth: 1,
    color: '#44a4eb',
    fontFamily: 'Cinzel_400Regular',
    fontSize: 32,
    marginTop: 40,
    paddingVertical: 8,
    textAlign: 'center',
    textShadowColor: '#000000dd',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    width: '100%'
  },

  viewQuantPessoas: {
    flexDirection: 'row',
    //justifyContent: 'center',
    marginTop: 32
  },

  txtQuantPessoas: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 18
  },

  inputNumberQuantPessoas: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    fontSize: 16,
    height: 32,
    textAlign: 'center',
    width: 40
  },

  btnPronto: {
    alignItems: 'center',
    backgroundColor: '#44a4eb',
    borderRadius: 15,
    elevation: 12,
    height: 50,
    justifyContent: 'center',
    marginTop: 32,
    width: 120
  },

  txtPronto: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 24,
    marginBottom: 4
  }
})

export default styles