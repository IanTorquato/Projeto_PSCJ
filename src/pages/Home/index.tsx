import React, { useEffect, useState } from 'react'
import { Alert, Image, Linking, ScrollView, Text, View } from 'react-native'
// import { Picker } from '@react-native-community/picker'
import { RectButton, TouchableNativeFeedback } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import api from '../../services/api'
import CabecalhoApp from '../../components/CabecalhoApp'
import BotaoPrimario from '../../components/BotaoPrimario'
import { Missa } from '../../utils/interfaces'
import { formatDiaMesHora } from '../../utils/tratandoDatas'
import retornaCorDoCicloTernario from '../../utils/cicloCores'
import { cores } from '../../styles'

import styles from './styles'

const Home = () => {
	const [missas, setMissas] = useState<Missa[]>([])
	// const [locais, setLocais] = useState<Local[]>([])
	// const [localSelecionado, setLocalSelecionado] = useState(0)

	const { branco } = cores.neutras
	// const { vermelhoClaro } = cores.principais

	useEffect(() => {
		api.get('missas?quantidade_missas=6')
			.then(({ data }) => setMissas(formatDiaMesHora(data)))
			.catch(({ response }) => {
				console.log(response)
				Alert.alert(response?.data.erro || 'Falha ao listar missas.')
			})

		// api.get('locais')
		// 	.then(({ data }) => setLocais(data))
		// 	.catch(({ response }) => {
		// 		console.log(response)
		// 		Alert.alert(response?.data.erro || 'Falha ao listar locais.')
		// 	})
	}, [])

	const encaminharParaWhatsapp = () => {
		Linking.canOpenURL("whatsapp://send").then(supported => {
			!!supported
				? Alert.alert('Deseja continuar?', 'Você será redirecionado para o Whatsapp.', [
					{ text: 'Cancelar' },
					{ text: 'Continuar', onPress: () => Linking.openURL('whatsapp://send?phone=554836422121') }
				])
				: Alert.alert('Whatsapp não disponínel!', 'Gostaria de abri-lo pelo navegador?', [
					{ text: 'Cancelar' },
					{ text: 'Continuar', onPress: () => Linking.openURL('https://api.whatsapp.com/send?phone=554836422121') }
				])
		})
	}

	const encaminharParaFacebook = () => {
		Linking.canOpenURL('fb://').then(supported => {
			!!supported
				? Alert.alert('Deseja continuar?', 'Você será redirecionado para o Facebook.', [
					{ text: 'Cancelar' },
					{ text: 'Continuar', onPress: () => Linking.openURL('fb://page/108271214142847') }
				])
				: Alert.alert('Facebook não disponínel!', 'Gostaria de abri-lo pelo navegador?', [
					{ text: 'Cancelar' },
					{ text: 'Continuar', onPress: () => Linking.openURL('https://www.facebook.com/santuariogravatal') }
				])
		})
	}

	const encaminharParaInstagram = () => {
		Linking.canOpenURL('instagram://user').then(supported => {
			!!supported
				? Alert.alert('Deseja continuar?', 'Você será redirecionado para o Instagram.', [
					{ text: 'Cancelar' },
					{ text: 'Continuar', onPress: () => Linking.openURL('instagram://user?username=santuariogravatal') }
				])
				: Alert.alert('Instagram não disponínel!', 'Gostaria de abri-lo pelo navegador?', [
					{ text: 'Cancelar' },
					{ text: 'Continuar', onPress: () => Linking.openURL('https://www.instagram.com/santuariogravatal') }
				])
		})
	}

	const encaminharParaYoutube = () => {
		Linking.canOpenURL('vnd.youtube://').then(supported => {
			!!supported
				? Alert.alert('Deseja continuar?', 'Você será redirecionado para o Youtube.', [
					{ text: 'Cancelar' },
					{ text: 'Continuar', onPress: () => Linking.openURL('vnd.youtube://c/TVtubaoficial') }
				])
				: Alert.alert('Youtube não disponínel!', 'Gostaria de abri-lo pelo navegador?', [
					{ text: 'Cancelar' },
					{ text: 'Continuar', onPress: () => Linking.openURL('https://www.youtube.com/c/TVtubaoficial') }
				])
		})
	}


	return (
		<ScrollView style={styles.viewHome} showsHorizontalScrollIndicator={true}>
			<CabecalhoApp />

			<Text style={styles.txtTitulosHome}>Próximas Missas</Text>

			{/* <View style={styles.viewPickerLocalidades}>
				<FontAwesome5 name="map-marker-alt" color={vermelhoClaro} size={16} />

				<Picker style={styles.pickerLocalidades} selectedValue={localSelecionado} prompt="Locais"
					onValueChange={value => setLocalSelecionado(+value)}>

					<Picker.Item label="Localidades" value="0" />

					{locais.map(local => <Picker.Item label={local.nome} value={local.id} key={local.id} />)}
				</Picker>
			</View> */}

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

					<Text style={styles.txtOrientacao}>As ofertas são feitas no fim da missa.</Text>
				</View>
			</View>

			<Text style={styles.txtTitulosHome}>Contato</Text>

			<View style={styles.viewContato}>
				<View style={styles.viewAlinhaRedesSociais}>
					<RectButton style={{ ...styles.viewRedeSocial, ...styles.viewWhatsapp }} onPress={encaminharParaWhatsapp}>
						<FontAwesome5 name="whatsapp" color="#fff" size={32} />
					</RectButton>

					<RectButton style={{ ...styles.viewRedeSocial, ...styles.viewFacebook }} onPress={encaminharParaFacebook}>
						<FontAwesome5 name="facebook-f" color="#fff" size={32} />
					</RectButton>

					<RectButton style={{ ...styles.viewRedeSocial, ...styles.viewInstagram }} onPress={encaminharParaInstagram}>
						<FontAwesome5 name="instagram" color="#fff" size={32} />
					</RectButton>

					<RectButton style={{ ...styles.viewRedeSocial, ...styles.viewYoutube }} onPress={encaminharParaYoutube}>
						<FontAwesome5 name="youtube" color="#fff" size={32} />
					</RectButton>
				</View>

				<Text style={styles.txtCopyright}>© 2021 - {new Date().getFullYear()} por Paróquia Sagrado Coração de Jesus</Text>
			</View>
		</ScrollView>
	)
}

export default Home