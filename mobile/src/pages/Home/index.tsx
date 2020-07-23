import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const logo = require('../../../assets/icon.png')

const Home = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView>
        <View style={styles.viewTopoVermelho}>
          <Image source={logo} style={styles.imgLogo} />
          <Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>
        </View>

        <Text style={styles.txtTituloFieis}>Orientação aos fiéis</Text>

        <Text style={styles.txtOrientacaoFieis}>Em tempos difíceis como o que vivemos é preciso reinventar-se a todo instante. Por isso, pensando na segurança e na saúde, tanto física quanto espiritual, de nossos paroquianos, este app foi criado, afim de facilitar o controle e o seguimento de regras necessárias para garantir o melhor bem-estar de todos aqueles que participam de nossa comunidade paroquial.</Text>

        <View style={styles.viewParaParticipar}>
          <Text style={styles.txtTituloParticipar}>Para participar da Santa Missa, é necessário ao fiel:</Text>
          <View style={styles.viewParticipar}>
            <Text style={styles.txtParaParticipar}>
              <Icon name="circle" size={6} color="#fff" solid /> Uma regra longa qualquer
            </Text>
            <Text style={styles.txtParaParticipar}>
              <Icon name="circle" size={6} color="#fff" solid /> Uma regra longa qualquer
            </Text>
            <Text style={styles.txtParaParticipar}>
              <Icon name="circle" size={6} color="#fff" solid /> Uma regra longa qualquer
            </Text>
            <Text style={styles.txtParaParticipar}>
              <Icon name="circle" size={6} color="#fff" solid /> Uma regra longa qualquer
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#444'
  },

  viewTopoVermelho: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e41e2555',
    paddingHorizontal: 20,
    paddingBottom: 10
  },

  imgLogo: {
    width: 80,
    height: 90,
    top: '8%',
    marginBottom: 16
  },

  txtSagrado: {
    color: '#fff',
    fontFamily: 'Cookie_400Regular',
    fontSize: 40,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 5,
    textAlign: 'center'
  },

  txtTituloFieis: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Lora_400Regular',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 130
  },

  txtOrientacaoFieis: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'justify',
    fontFamily: 'Lora_400Regular',
    marginBottom: 64,
    marginHorizontal: 32,
    marginTop: 16
  },

  viewParaParticipar: {
    backgroundColor: '#333',
    marginTop: 25,
    paddingVertical: 20
  },

  txtTituloParticipar: {
    color: '#fff',
    fontFamily: 'Lora_400Regular',
    fontStyle: 'italic',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 35,
    paddingBottom: 8
  },

  viewParticipar: {
    paddingLeft: 20,
  },

  txtParaParticipar: {
    color: '#fff',
    fontFamily: 'Lora_400Regular',
    fontSize: 15,
    paddingBottom: 8
  }
})

export default Home