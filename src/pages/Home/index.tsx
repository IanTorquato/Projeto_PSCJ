import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import api from '../../services/api'
import CabecalhoApp from '../../components/CabecalhoApp'
import BotaoPrimario from '../../components/BotaoPrimario'
import Missa from '../../utils/interfaces'
import { formatDiaMesHora } from '../../utils/tratandoDatas'
import retornaCorDoCicloTernario from '../../utils/cicloCores'
import { cores } from '../../styles'

import styles from './styles'

const Home = () => {
	const [missas, setMissas] = useState<Missa[]>([])
	const { branco } = cores.neutras

	useEffect(() => {
		api.get('missas?quantidade_missas=6')
			.then(({ data }) => setMissas(formatDiaMesHora(data)))
			.catch(({ response }) => {
				console.log(response)
				Alert.alert(response?.data.erro || 'Falha ao listar missas.')
			})
	}, [])

	return (
		<ScrollView style={styles.viewHome} showsHorizontalScrollIndicator={true}>
			<CabecalhoApp />

			<View style={styles.viewTitulo}>
				<Text style={styles.txtTitulosHome}>Próximas Missas</Text>
				<Text style={styles.txtTeste}>Filtarar Lolicadades</Text>
			</View>

			{!missas[0] ? <Text style={styles.txtNomeMissa}>Nada de missas aqui!</Text> : (
				<ScrollView style={styles.viewMissas} horizontal showsHorizontalScrollIndicator={false}>
					{missas.map((missa, index) => (
						<View style={{ ...styles.viewBorda, ...retornaCorDoCicloTernario(index, 'borderColor') }} key={missa.id}>
							<RectButton style={styles.btnMissa}>
								<Image source={{ uri: missa.local_url }} style={styles.imgLocal} />

								<View style={styles.viewDadosMissa}>
									<Text style={styles.txtNomeMissa}>{missa.nome}</Text>

									<View style={styles.viewIconDados}>
										<View style={styles.viewDeixarEmLinha}>
											<FontAwesome5 name="calendar-alt" color={branco} />
											<Text style={styles.txtDadosMissa}>{missa.data}</Text>
										</View>
										<View style={styles.viewDeixarEmLinha}>
											<MaterialCommunityIcons name="clock" color={branco} />
											<Text style={styles.txtDadosMissa}>{missa.hora}</Text>
										</View>
									</View>

									<View style={styles.viewIconDados}>
										<View style={styles.viewDeixarEmLinha}>
											<FontAwesome5 name="map-marked-alt" color={branco} />
											<Text style={styles.txtDadosMissa}>{missa.local_nome}</Text>
										</View>
										<View style={styles.viewDeixarEmLinha}>
											<MaterialCommunityIcons name="account-group" color={branco} />
											<Text style={styles.txtDadosMissa}>{missa.pessoas_cadastradas}/{missa.max_pessoas}</Text>
										</View>
									</View>
								</View>
							</RectButton>
						</View>
					))}
				</ScrollView>)}

			<View style={styles.viewListaMissas}>
				<Text style={styles.txtListaMissas}>Confira aqui a lista completa de missas da nossa Paróquia!</Text>

				<BotaoPrimario text="Lista de Missas" styleComplements={styles.btnListaMissas} />
			</View>

			<View>
				<Text style={styles.txtTitulosHome}>Orientações para a Santa Missa</Text>

				<View style={styles.viewOrientacao}>
					<View style={{ ...styles.imgOrientacao, ...retornaCorDoCicloTernario(0, 'backgroundColor') }}>
						<FontAwesome5 name="mask" color={branco} size={24} />
					</View>

					<Text style={styles.txtOrientacao}>É obrigatório o uso de máscara;</Text>
				</View>

				<View style={styles.viewOrientacao}>
					<View style={{ ...styles.imgOrientacao, ...retornaCorDoCicloTernario(1, 'backgroundColor') }}>
						<FontAwesome5 name="mask" color={branco} size={24} />
					</View>

					<Text style={styles.txtOrientacao}>Higienize as mãos com álcool em gel;</Text>
				</View>

				<View style={styles.viewOrientacao}>
					<View style={{ ...styles.imgOrientacao, ...retornaCorDoCicloTernario(2, 'backgroundColor') }}>
						<FontAwesome5 name="mask" color={branco} size={24} />
					</View>

					<Text style={styles.txtOrientacao}>Duas pessoas por banco, exceto familiares;</Text>
				</View>

				<View style={styles.viewOrientacao}>
					<View style={{ ...styles.imgOrientacao, ...retornaCorDoCicloTernario(3, 'backgroundColor') }}>
						<FontAwesome5 name="mask" color={branco} size={24} />
					</View>

					<Text style={styles.txtOrientacao}>Mantenha o distanciamento de 1,5m;</Text>
				</View>

				<View style={styles.viewOrientacao}>
					<View style={{ ...styles.imgOrientacao, ...retornaCorDoCicloTernario(4, 'backgroundColor') }}>
						<FontAwesome5 name="mask" color={branco} size={24} />
					</View>

					<Text style={styles.txtOrientacao}>Não ultrapasse o cordão de isolamento;</Text>
				</View>

				<View style={styles.viewOrientacao}>
					<View style={{ ...styles.imgOrientacao, ...retornaCorDoCicloTernario(5, 'backgroundColor') }}>
						<FontAwesome5 name="mask" color={branco} size={24} />
					</View>

					<Text style={styles.txtOrientacao}>As ofertas são feitas no fim da missa;</Text>
				</View>
			</View>
		</ScrollView>
	)
}

export default Home