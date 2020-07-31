import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native'
import { RadioButton } from 'react-native-paper'

import api from '../../services/api'

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

const Missas: React.FC = () => {
  const [missas, setMissas] = useState<Missa[]>([])
  const [valorSelecionado, setValorSelecionado] = useState('')

  useEffect(() => {
    buscarMissasApi()
  }, [])

  async function buscarMissasApi() {
    try {
      setValorSelecionado('')

      const { data } = await api.get('missas')

      setMissas(data.map((missa: Missa) => {
        const dataCortada = missa.data.split('/')

        missa.data = `${dataCortada[2]}/${dataCortada[1]}/${dataCortada[0]}`

        return missa
      }))
    } catch (erro) {
      Alert.alert('Erro', String(erro))
    }
  }

  async function listarMissasPorLocal(localId: string) {
    try {
      if (localId === valorSelecionado) {
        buscarMissasApi()
      }
      else {
        setValorSelecionado(localId)

        const { data } = await api.get(`missas?local_id=${localId}`)

        setMissas(data.map((missa: Missa) => {
          const dataCortada = missa.data.split('/')

          missa.data = `${dataCortada[2]}/${dataCortada[1]}/${dataCortada[0]}`

          return missa
        }))
      }
    } catch (erro) {
      Alert.alert('Erro', erro)
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.viewContainer}>
        <Text style={styles.txtMissas}>Missas</Text>

        <View style={styles.viewFiltro}>
          <Text style={styles.txtFiltro}>Filtro:</Text>

          <RadioButton.Group onValueChange={localId => listarMissasPorLocal(localId)} value={valorSelecionado}>
            <View style={styles.viewRadio}>
              <RadioButton value="1" color="#ffb02c" />
              <Text style={styles.txtFiltro}>Centro</Text>
            </View>

            <View style={styles.viewRadio}>
              <RadioButton value="2" color="#ffb02c" />
              <Text style={styles.txtFiltro}>Termas</Text>
            </View>
          </RadioButton.Group>
        </View>

        {missas.map(missa => (
          <View style={styles.viewMissa} key={missa.id}>
            <Image source={missa.local_id === 1 ? imgCentro : imgTermas} style={styles.imgLocal}></Image>

            <View style={styles.viewDadosMissa}>
              <Text style={styles.txtLocal}>{missa.local_id === 1 ? 'Centro' : 'Termas'}</Text>

              <View style={styles.viewDataHora}>
                <Text style={styles.txtDataHora}>Data: {missa.data.slice(0, 5)}</Text>
                <Text style={styles.txtDataHora}>Hora: {missa.hora}</Text>
              </View>

              <View style={styles.viewQuantPessoas}>
                <Text style={styles.txtQuantPessoas}>Quant. Pessoas: {missa.pessoas_cadastradas}/{missa.max_pessoas}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#444'
  },
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#444',
    flex: 1,
    paddingVertical: 16
  },

  txtMissas: {
    borderBottomColor: '#ffb02c',
    borderBottomWidth: 1,
    borderTopColor: '#ffb02c',
    borderTopWidth: 1,
    color: '#ffb02c',
    fontFamily: 'Cinzel_400Regular',
    fontSize: 40,
    paddingVertical: 8,
    textAlign: 'center',
    textShadowColor: '#000000dd',
    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 15,
    width: '100%'
  },

  viewFiltro: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8
  },

  viewRadio: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8
  },

  txtFiltro: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16
  },

  viewMissa: {
    borderRadius: 10,
    flexDirection: 'row',
    height: 88,
    marginVertical: 4,
    width: 328
  },

  imgLocal: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: 88,
    resizeMode: 'cover',
    width: 120
  },

  viewDadosMissa: {
    alignItems: 'center',
    backgroundColor: '#eee',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    width: 208
  },

  txtLocal: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    fontWeight: 'bold'
  },

  viewDataHora: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  txtDataHora: {
    color: '#555',
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 4
  },

  viewQuantPessoas: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  txtQuantPessoas: {
    color: '#e41e25',
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
    fontWeight: '500'
  }
})

export default Missas