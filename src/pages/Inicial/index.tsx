import React from 'react'
import { Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import BotaoPrimario from '../../components/BotaoPrimario'
import BotaoSecundario from '../../components/BotaoSecundario'

import styles from './styles'

const logo = require('../../assets/logo.png')

const Inicial = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.viewConteudo}>
      <Image source={logo} style={styles.imgLogo} />

      <Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>

      <BotaoPrimario text="Entrar" onPress={() => navigate('Login')}
        styleComplements={{ ...styles.btnsInicio, ...styles.btnEntrar }} />

      <BotaoSecundario text="Cadastrar-se" onPress={() => navigate('Cadastro')} styleComplements={styles.btnsInicio} />
    </View>
  )
}

export default Inicial
