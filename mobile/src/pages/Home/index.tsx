import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import Svg, { G, Path } from "react-native-svg"
import { FontAwesome5 } from '@expo/vector-icons'

import { useContextLogin } from '../../contexts/login'

import styles from './styles'

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
              <FontAwesome5 name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtParaParticipar}>Olá, {usuario?.nome} :)</Text>
            </View>

            <View style={styles.viewRegras}>
              <FontAwesome5 name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtParaParticipar}>E-mail: {usuario?.email}</Text>
            </View>

            <View style={styles.viewRegras}>
              <FontAwesome5 name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtParaParticipar}>Uma regra longa qualquer</Text>
            </View>

            <View style={styles.viewRegras}>
              <FontAwesome5 name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtParaParticipar}>Outra regra longa qualquer</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home