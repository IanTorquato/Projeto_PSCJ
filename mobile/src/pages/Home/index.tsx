import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import Svg, { G, Path } from "react-native-svg"
import Icon from 'react-native-vector-icons/FontAwesome5'

import { useContextLogin } from '../../contexts/login'

const logo = require('../../../assets/icon.png')

const Home = () => {
  const { deslogar, usuario } = useContextLogin()
  return (
    <View style={styles.viewContainer}>
      <ScrollView>
        <Svg width="100%" height={360} viewBox="0 0 500 500" fill="none">
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

        <TouchableOpacity onPress={deslogar} style={styles.btnDeslogar}>
          <Text style={styles.txtDeslogar}>DESLOGAR</Text>
        </TouchableOpacity>

        <View style={styles.viewParaParticipar}>
          <Text style={styles.txtTituloParticipar}>Para participar da Santa Missa, é necessário ao fiel:</Text>
          <View style={styles.viewParticipar}>
            <View style={styles.viewRegras}>
              <Icon name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtParaParticipar}>Olá, {usuario?.nome} :)</Text>
            </View>

            <View style={styles.viewRegras}>
              <Icon name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtParaParticipar}>E-mail: {usuario?.email}</Text>
            </View>

            <View style={styles.viewRegras}>
              <Icon name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtParaParticipar}>Uma regra longa qualquer</Text>
            </View>

            <View style={styles.viewRegras}>
              <Icon name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtParaParticipar}>Outra regra longa qualquer</Text>
            </View>
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
    fontFamily: 'Lora_400Regular',
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
    fontFamily: 'Lora_400Regular',
    fontSize: 16,
    marginLeft: 8
  }
})

export default Home