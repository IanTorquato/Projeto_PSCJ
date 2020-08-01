import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

const imgCentro = require('../../assets/igrejaCentro.png')
const imgTermas = require('../../assets/igrejaTermas.png')

const DetalhesMissa = () => {
  const navigation = useNavigation()

  function paraAnterior() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={paraAnterior} style={styles.btnVoltar}>
        <FontAwesome5 name="arrow-circle-left" color="#fff" size={32} />
      </TouchableOpacity>

      <View style={styles.viewDetalhesMissa}>
        <Image source={imgCentro} style={styles.imgLocal} />

        <View style={styles.viewDadosMissa}>
          <Text style={styles.txtLocal}></Text>

          <View style={styles.viewContainDataHora}>
            <View style={styles.viewDataHora}>
              <FontAwesome5 name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtDataHora}>Data: {}</Text>
            </View>

            <View style={styles.viewDataHora}>
              <FontAwesome5 name="circle" size={6} color="#fff" solid />
              <Text style={styles.txtDataHora}>Hora: {}</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.txtReserveVaga}>Reserve sua vaga</Text>

      <View style={styles.viewQuantPessoas}>
        <Text style={styles.txtQuantPessoas}>Quantidade de pessoas:</Text>
        <View style={styles.inputNumberQuantPessoas}></View>
      </View>

      <RectButton>
        <Text style={styles.txtPronto}>Pronto!</Text>
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },

  btnVoltar: {
    left: 16,
    position: 'absolute',
    top: 16
  },

  viewDetalhesMissa: {
    height: 304,
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
    flexDirection: 'row'
  },

  txtDataHora: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontWeight: 'bold'
  },

  txtReserveVaga: {
    borderBottomColor: '#44a4eb',
    borderBottomWidth: 1,
    borderTopColor: '#44a4eb',
    borderTopWidth: 1,
    color: '#44a4eb',
    fontFamily: 'Cinzel_400Regular',
    fontSize: 32,
    marginTop: 48,
    paddingVertical: 8,
    textAlign: 'center',
    textShadowColor: '#000000dd',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    width: '100%'
  },

  viewQuantPessoas: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  txtQuantPessoas: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular'
  },

  inputNumberQuantPessoas: {},

  btnPronto: {
    backgroundColor: '#44a4eb',
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 24
  },

  txtPronto: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 24
  }
})

export default DetalhesMissa