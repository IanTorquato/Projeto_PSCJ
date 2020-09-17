import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

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
	pessoas_cadastradas: number
}

const DetalhesMissa = ({ route }: any) => {
	const { goBack } = useNavigation()

	const [missa, setMissa] = useState<Missa>(route.params)
	const [quantidade_pessoas, setQuantidadePessoas] = useState(1)

	const { usuario } = useContextLogin()

	function atualizarQuantPessoas() {
		if ((quantidade_pessoas + missa.pessoas_cadastradas) > missa.max_pessoas) {
			return Alert.alert('Erro', `Restam apenas ${missa.max_pessoas - missa.pessoas_cadastradas} vagas nesta missa.`)
		}

		// Alert("Título", "Mensagem", [{text: 'txtBtn', onPress: função}], {Opções (cancelable: false)})
		Alert.alert('Corfirmar', 'Deseja se cadastrar nesta missa?',
			[{ text: 'Cancelar' }, {
				text: 'Confirmar', onPress: () => {
					const { id, pessoas_cadastradas } = missa
					const dadosMissaUsuario = { missa_id: id, usuario_id: usuario?.id, quantidade_pessoas, pessoas_cadastradas }

					api.post('missa_usuario', dadosMissaUsuario).then(({ data }) => {
						Alert.alert('Sucesso', data.mensagem)
						goBack()
					}).catch(({ response }) => {
						Alert.alert('Erro', response.data.erro)
					})
				}
			}])
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goBack} style={styles.btnVoltar}>
				<FontAwesome5 name="arrow-circle-left" color="#fff" size={32} />
			</TouchableOpacity>

			<View style={styles.viewDetalhesMissa}>
				<Image source={{ uri: missa.local_id === 1 ? imgCentro : imgTermas }} style={styles.imgLocal} />

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

				<NumericInput type="up-down" initValue={1} minValue={1} maxValue={20} totalWidth={56} totalHeight={40} editable={false} rounded
					borderColor="#595959" containerStyle={{ backgroundColor: '#fff' }} onChange={num => setQuantidadePessoas(num)} />
			</View>

			<RectButton style={styles.btnPronto} onPress={atualizarQuantPessoas}>
				<Text style={styles.txtPronto}>Pronto!</Text>
			</RectButton>
		</View>
	)
}

export default DetalhesMissa