import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Svg, { G, Path } from "react-native-svg"
import Icon from 'react-native-vector-icons/FontAwesome5'

const logo = require('../../../assets/icon.png')

const Home = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView>
        <Svg width="100%" height={330} viewBox="0 0 500 460" fill="none">
          <G>
            <Path
              d="M0 0h500v280.095a700.272 700.272 0 01-492.576 2.743L0 276.095V0z"
              fill="#710b0e"
              fillOpacity={0.8}
            />
          </G>

          <View style={styles.viewTopoVermelho}>
            <Image source={logo} style={styles.imgLogo} />
            <Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>
          </View>
        </Svg>

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
    alignItems: 'center',
    backgroundColor: '#444',
    flex: 1
  },

  viewTopoVermelho: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  imgLogo: {
    height: 90,
    marginBottom: 24,
    top: '8%',
    width: 80
  },

  txtSagrado: {
    color: '#fff',
    fontFamily: 'Cookie_400Regular',
    fontSize: 40,
    marginHorizontal: 30,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 5
  },

  txtTituloFieis: {
    color: '#fff',
    fontFamily: 'Lora_400Regular',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  txtOrientacaoFieis: {
    color: '#fff',
    fontFamily: 'Lora_400Regular',
    fontSize: 15,
    marginBottom: 64,
    marginHorizontal: 32,
    marginTop: 16,
    textAlign: 'justify'
  },

  viewParaParticipar: {
    backgroundColor: '#333',
    marginTop: 25,
    paddingVertical: 20
  },

  txtTituloParticipar: {
    color: '#fff',
    fontFamily: 'Lora_400Regular',
    fontSize: 18,
    fontStyle: 'italic',
    marginHorizontal: 35,
    paddingBottom: 8,
    textAlign: 'center'
  },

  viewParticipar: {
    paddingLeft: 20
  },

  txtParaParticipar: {
    color: '#fff',
    fontFamily: 'Lora_400Regular',
    fontSize: 15,
    paddingBottom: 8
  }
})

export default Home