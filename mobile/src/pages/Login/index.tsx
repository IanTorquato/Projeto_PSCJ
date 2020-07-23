import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { FontAwesome5 as Fa } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

const Login = () => {
  const navigation = useNavigation()

  function paraAnterior() {
    navigation.goBack()
  }

  function paraHomeDoApp() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fundoLogin} style={styles.fundoLogin}>
        <Image source={logo} style={styles.imgLogo} />

        <TouchableOpacity onPress={paraAnterior} style={styles.btnVoltar}>
          <Fa name="arrow-circle-left" color="#fff" size={32} />
        </TouchableOpacity>

        <View style={styles.containerInputs}>
          <Text style={styles.txtInput}>Nome:</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" />
        </View>

        <View style={styles.containerInputs}>
          <Text style={styles.txtInput}>E-mail:</Text>
          <TextInput style={styles.input} placeholder="Digite seu e-mail" />
        </View>

        <RectButton style={styles.botao} onPress={paraHomeDoApp}>
          <Text style={styles.txtBotao}>Entrar</Text>
        </RectButton>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  fundoLogin: {
    flex: 1,
    alignItems: 'center'
  },

  btnVoltar: {
    position: 'absolute',
    left: 16,
    top: 16
  },

  imgLogo: {
    width: 128,
    top: 24,
    resizeMode: 'contain'
  },

  containerInputs: {
    width: 280,
    top: '4%',
    marginBottom: 16
  },

  txtInput: {
    color: '#fff',
    left: 4,
    marginBottom: 4,
    fontSize: 14
  },

  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 8,
    height: 50,
    fontSize: 18,
    paddingLeft: 15
  },

  botao: {
    top: '16%',
    height: 50,
    backgroundColor: '#e41e25',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 32
  },

  txtBotao: {
    color: '#fff',
    fontSize: 24,
    top: -2
  }
})

export default Login