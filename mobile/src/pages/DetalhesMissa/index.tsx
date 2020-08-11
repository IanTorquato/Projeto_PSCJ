import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api'
import { useContextLogin } from '../../contexts/login'

const imgCentro = require('../../assets/igrejaCentro.png')
const imgTermas = require('../../assets/igrejaTermas.png')

interface Missa {
  id: number
  local_id: number
  data: string
  hora: string
  max_pessoas: number
  pessoas_cadastradas: number
}

const DetalhesMissa = ({ route }: any) => {
  const { goBack } = useNavigation()

  const [missa, setMissa] = useState<Missa>(route.params)
  const [quantidade_pessoas, setQuantidadePessoas] = useState(1)

  const { usuario } = useContextLogin()

  async function atualizarQuantPessoas() {
    if (String(quantidade_pessoas) === 'NaN') {
      Alert.alert('Erro', 'Não banque o esperto :v\nDigite um número!')
    }
    else {
      if (quantidade_pessoas + missa.pessoas_cadastradas > missa.max_pessoas) {
        Alert.alert('Erro', `Restam apenas ${missa.max_pessoas - missa.pessoas_cadastradas} vagas nesta missa.`)
      } else {
        try {
          const { id, pessoas_cadastradas } = missa
          const dadosMissaUsuario = { missa_id: id, usuario_id: usuario?.id, quantidade_pessoas, pessoas_cadastradas }

          const { data } = await api.post('missa_usuario', dadosMissaUsuario)
          const { erro, mensagem } = data

          erro ? Alert.alert('Erro', erro) : Alert.alert('Sucesso', mensagem)
        } catch (erro) {
          Alert.alert('Erro', erro)
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.btnVoltar}>
        <FontAwesome5 name="arrow-circle-left" color="#fff" size={32} />
      </TouchableOpacity>

      <View style={styles.viewDetalhesMissa}>
        <Image source={missa.local_id === 1 ? imgCentro : imgTermas} style={styles.imgLocal} />

        <View style={styles.viewDadosMissa}>
          <Text style={styles.txtLocal}>{missa.local_id === 1 ? 'Centro' : 'Termas'}</Text>

          <View style={styles.viewContainDataHora}>
            <View style={styles.viewDataHora}>
              <FontAwesome5 name="circle" size={6} color="#ddd" solid />
              <Text style={[styles.txtDataHora, styles.txtData]}>Data:
                <Text style={styles.txtValueDataHora}> {missa.data.slice(0, 5)}</Text>
              </Text>
            </View>

            <View style={styles.viewDataHora}>
              <FontAwesome5 name="circle" size={6} color="#ddd" solid />
              <Text style={styles.txtDataHora}>Hora:
                <Text style={styles.txtValueDataHora}> {missa.hora}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.txtReserveVaga}>Reserve sua vaga</Text>

      <View style={styles.viewQuantPessoas}>
        <Text style={styles.txtQuantPessoas}>Quantidade de pessoas: </Text>
        <TextInput style={styles.inputNumberQuantPessoas} maxLength={2} autoCorrect={false} defaultValue="1"
          keyboardType="numeric" onChangeText={text => setQuantidadePessoas(Number(text))} />
      </View>

      <RectButton style={styles.btnPronto} onPress={atualizarQuantPessoas}>
        <Text style={styles.txtPronto}>Pronto!</Text>
      </RectButton>
    </View>
  )
}

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

export default DetalhesMissa