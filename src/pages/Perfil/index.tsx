import React, { useState } from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import Svg, { G, Path } from 'react-native-svg'
import { FontAwesome5 } from '@expo/vector-icons'
import { BaseButton } from 'react-native-gesture-handler'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import api, { baseURL } from '../../services/api'
import { useContextLogin } from '../../contexts/login'

import styles from './styles'

const imgCentro = `${baseURL}/uploads/fotosLocais/igrejaCentro.png`
const imgTermas = `${baseURL}/uploads/fotosLocais/igrejaTermas.png`

interface Missa {
  id: number
  local_id: number
  data: string
  hora: string
  max_pessoas: number
  pessoas_cadastradas: number,
  quantidade_pessoas: number
}

const Perfil: React.FC = () => {
  const [missas, setMissas] = useState<Missa[]>([])

  const { navigate } = useNavigation()
  const { usuario } = useContextLogin()

  useFocusEffect(
    React.useCallback(() => { buscarMissasDoUsuario() }, [])
  )

  function buscarMissasDoUsuario() {
    api.get(`missas?usuario_id=${usuario?.id}`).then(({ data }) => {
      setMissas(data.map((missa: Missa) => {
        const dataCortada = missa.data.split('/')

        missa.data = `${dataCortada[2]}/${dataCortada[1]}/${dataCortada[0]}`

        return missa
      }))

    }).catch(({ response }) => {
      response.status !== 404 && Alert.alert('Erro', response.data.erro)
    })
  }

  function excluirMissaUsuario(missa: Missa) {
    Alert.alert('Corfirmar', 'Cancelar presença nesta missa?',
      [{ text: 'Cancelar' }, {
        text: 'Confirmar', onPress: () => {
          const quantRemover = missa.quantidade_pessoas
          const quantCadastradasAtual = missa.pessoas_cadastradas

          const urlExcluir = `missa_usuario/${missa.id}/${usuario?.id}/${quantRemover}/${quantCadastradasAtual}`

          api.delete(urlExcluir).then(({ data }) => {
            Alert.alert('Sucesso', data.mensagem)
            buscarMissasDoUsuario()
          }).catch(({ response }) => {
            Alert.alert('Erro', response.data.erro)
            console.log(response)
          })
        }
      }])
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.viewContainer}>
        <Svg width="100%" height={360} viewBox="0 0 500 500" fill="none">
          <G><Path d="M0 0h500v280.095a700.272 700.272 0 01-492.576 2.743L0 276.095V0z" fill="#333" fillOpacity={0.8} /></G>

          <View style={styles.viewPerfilUsuario}>
            <View style={styles.viewEditarUsuario}>
              <BaseButton onPress={() => {
                Alert.alert('Erro',
                  'Infelizmente esta funcionalidade ainda não está disponivel')
              }}>
                <FontAwesome5 name="user-edit" size={25} color="#fff" />
              </BaseButton>
            </View>

            {usuario?.foto !== ''
              ? <Image source={{ uri: usuario?.foto }} style={styles.imgUsuario} />
              : <FontAwesome5 name="user-circle" size={80} color="#fff" />
            }

            <Text style={styles.txtNomeUsuario}>{usuario?.nome}</Text>
            <Text style={styles.txtEmailUsuario}>{usuario?.email}</Text>
          </View>
        </Svg>

        <Text style={styles.txtMissas}>Missas Cadastradas</Text>

        {missas.map(missa => (
          <View style={styles.viewMissa} key={missa.id}>
            <Image source={{ uri: missa.local_id === 1 ? imgCentro : imgTermas }} style={styles.imgLocal} />

            <View style={styles.viewDadosMissa}>
              <View style={styles.viewEditarMissa}>
                <BaseButton style={styles.btnExcluirMissa} onPress={() => { excluirMissaUsuario(missa) }}>
                  <FontAwesome5 name="trash" size={16} color="#000" />
                </BaseButton>

                <BaseButton onPress={() => { navigate('DetalhesMissaPerfil', missa) }}>
                  <FontAwesome5 name="edit" size={16} color="#000" />
                </BaseButton>
              </View>

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

              <View style={styles.viewPessoasCadastradas}>
                <Text style={styles.txtPessoasCadastradas}>Pessoas Cadastradas: {missa.quantidade_pessoas}</Text>
              </View>
            </View>
          </View>
        ))}

        {missas[0] !== undefined ? <></> : (
          <View style={styles.viewNadaDeMissas}>
            <FontAwesome5 name="sad-tear" size={80} color="#d5d5d5" />

            <Text style={styles.txtNadaDeMissas}>Você não possui</Text>
            <Text style={styles.txtNadaDeMissas}>Missas cadastradas...</Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

export default Perfil
