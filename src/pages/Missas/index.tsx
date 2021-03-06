import React, { useState } from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { RadioButton } from 'react-native-paper'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import api, { baseURL } from '../../services/api'

import styles from './styles'

const imgCentro = `${baseURL}/uploads/fotosLocais/igrejaCentro.png`
const imgTermas = `${baseURL}/uploads/fotosLocais/igrejaTermas.png`

interface Missa {
  id: number
  local_id: number
  data: string
  hora: string
  max_pessoas: number
  pessoas_cadastradas: number
}

const Missas: React.FC = () => {
  const { navigate } = useNavigation()
  const [missas, setMissas] = useState<Missa[]>([])
  const [valorSelecionado, setValorSelecionado] = useState('')

  useFocusEffect(
    React.useCallback(() => { buscarMissasApi() }, [])
  )

  function buscarMissasApi() {
    setValorSelecionado('')

    api.get('missas').then(({ data }) => {
      setMissas(data.map((missa: Missa) => {
        const dataCortada = missa.data.split('/')

        missa.data = `${dataCortada[2]}/${dataCortada[1]}/${dataCortada[0]}`

        return missa
      }))
    }).catch(({ response }) => {
      response.status !== 404 && Alert.alert('Erro', response.data.erro)
    })
  }

  function listarMissasPorLocal(localId: string) {
    if (localId === valorSelecionado) {
      buscarMissasApi()
    }
    else {
      setValorSelecionado(localId)

      api.get(`missas?local_id=${localId}`).then(({ data }) => {
        setMissas(data.map((missa: Missa) => {
          const dataCortada = missa.data.split('/')

          missa.data = `${dataCortada[2]}/${dataCortada[1]}/${dataCortada[0]}`

          return missa
        }))
      }).catch(({ response }) => {
        console.log(response.data)
        Alert.alert('Erro', response.data.erro)
      })
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
          <RectButton style={styles.viewMissa} key={missa.id} onPress={() => { navigate('DetalhesMissa', missa) }}>
            <Image source={{ uri: missa.local_id === 1 ? imgCentro : imgTermas }} style={styles.imgLocal}></Image>

            <View style={styles.viewDadosMissa}>
              <Text style={styles.txtLocal}>{missa.local_id === 1 ? 'Centro' : 'Termas'}</Text>

              <View style={styles.viewDataHora}>
                <View style={styles.viewValueDataHora}>
                  <Text style={styles.txtDataHora}>Data: </Text>
                  <Text style={styles.txtValueDataHora}>{missa.data.slice(0, 5)}</Text>
                </View>

                <View style={styles.viewValueDataHora}>
                  <Text style={styles.txtDataHora}>Hora: </Text>
                  <Text style={styles.txtValueDataHora}>{missa.hora}</Text>
                </View>
              </View>

              <View style={styles.viewQuantPessoas}>
                <Text style={styles.txtQuantPessoas}>Quant. Pessoas: {missa.pessoas_cadastradas}/{missa.max_pessoas}</Text>
              </View>
            </View>
          </RectButton>
        ))}

        {missas[0] !== undefined ? <></> :
          <View style={styles.viewNadaDeMissas}>
            <FontAwesome5 name="sad-tear" size={80} color="#d5d5d5" />

            <Text style={styles.txtNadaDeMissas}>Não há nenhuma missa</Text>
            <Text style={styles.txtNadaDeMissas}>Para listar aqui...</Text>
          </View>
        }
      </View>
    </ScrollView>
  )
}

export default Missas
