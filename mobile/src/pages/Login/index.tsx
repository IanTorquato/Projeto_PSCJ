import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, Alert, KeyboardAvoidingView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'

import { useContextLogin } from '../../contexts/login'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

const Login = () => {
  const { goBack } = useNavigation()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  const { logar } = useContextLogin()

  async function entrar() {
    try {
      const schemaDadosCadastro = Yup.object().shape({
        nome: Yup.string().trim().required('O campo Nome é obrigatório!').min(3, 'O nome deve conter ao menos 3 caracteres!'),
        email: Yup.string().trim().required('O campo E-mail é obrigatório!').email('Digite um E-mail válido!')
      })

      await schemaDadosCadastro.validate({ nome, email })
      logar({ id: 0, nome, email })
    } catch (erro) {
      Alert.alert('Erro', erro.errors[0])
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={fundoLogin} style={styles.fundoLogin}>
        <Image source={logo} style={styles.imgLogo} />

        <TouchableOpacity onPress={goBack} style={styles.btnVoltar}>
          <FontAwesome5 name="arrow-circle-left" color="#fff" size={32} />
        </TouchableOpacity>

        <View style={styles.containerInputs}>
          <View style={styles.containerInput}>
            <Text style={styles.txtInput}>Nome:</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome"
              onChangeText={text => setNome(text)} />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.txtInput}>E-mail:</Text>
            <TextInput style={styles.input} placeholder="Digite seu e-mail"
              onChangeText={text => setEmail(text)} />
          </View>
        </View>

        <RectButton style={styles.botao} onPress={entrar}>
          <Text style={styles.txtBotao}>Entrar</Text>
        </RectButton>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

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

export default Login