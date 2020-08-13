import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native'
import Svg, { G, Path } from 'react-native-svg'
import { FontAwesome5 } from '@expo/vector-icons'
import { BaseButton } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'

import api from '../../services/api'
import { useContextLogin } from '../../contexts/login'

import styles from './styles'

const imgCentro = require('../../assets/igrejaCentro.png')
const imgTermas = require('../../assets/igrejaTermas.png')

interface Missa {
	id: number
	local_id: number
	data: string
	hora: string
	quantidade_pessoas: number
}

const Perfil: React.FC = () => {
	const [missas, setMissas] = useState<Missa[]>([])

	const { usuario } = useContextLogin()

	useFocusEffect(
		React.useCallback(() => {
			buscarMissasDoUsuario()
		}, [])
	)

	async function buscarMissasDoUsuario() {
		try {
			const { data } = await api.get(`missas?usuario_id=${usuario?.id}`)

			if (!data.erro) {
				setMissas(data.map((missa: Missa) => {
					const dataCortada = missa.data.split('/')

					missa.data = `${dataCortada[2]}/${dataCortada[1]}/${dataCortada[0]}`

					return missa
				}))
			}
			else {
				Alert.alert('Erro', data.erro)
			}
		} catch (erro) {
			if (String(erro) === 'Error: Network Error') {
				Alert.alert('Erro', 'Erro na conexão...')
			}
			else {
				Alert.alert('Erro', String(erro))
			}
		}
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
							? <Image source={{ uri: usuario!.foto }} style={styles.imgUsuario} />
							: <FontAwesome5 name="user-circle" size={80} color="#fff" />
						}

						<Text style={styles.txtNomeUsuario}>Ana Clara V. Rodrigues</Text>
						<Text style={styles.txtEmailUsuario}>anaclaravargas16@gmail.com</Text>
					</View>
				</Svg>

				<Text style={styles.txtMissas}>Missas Cadastradas</Text>

				{missas.map(missa => (
					<View style={styles.viewMissa} key={missa.id}>
						<Image source={missa.local_id === 1 ? imgCentro : imgTermas} style={styles.imgLocal} />

						<View style={styles.viewDadosMissa}>
							<View style={styles.viewEditarMissa}>
								<BaseButton onPress={() => {
									Alert.alert('Erro',
										'Infelizmente esta funcionalidade ainda não está disponivel')
								}}>
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
						<FontAwesome5 name="sad-tear" size={80} />

						<Text style={styles.txtNadaDeMissas}>Você não possui</Text>
						<Text style={styles.txtNadaDeMissas}>Missas cadastradas...</Text>
					</View>
				)}
			</View>
		</ScrollView>
	)
}

export default Perfil