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

          <View style={styles.viewDataHora}>
            <Text style={styles.txtDataHora}>Data: {}</Text>
          </View>

          <View style={styles.viewDataHora}>
            <Text style={styles.txtDataHora}>Hora: {}</Text>
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
  container: {},

  btnVoltar: {},

  viewDetalhesMissa: {},

  imgLocal: {},

  viewDadosMissa: {},

  txtLocal: {},

  viewDataHora: {},

  txtDataHora: {},

  txtReserveVaga: {},

  viewQuantPessoas: {},

  txtQuantPessoas: {},

  inputNumberQuantPessoas: {},

  btnPronto: {},

  txtPronto: {}
})

export default DetalhesMissa