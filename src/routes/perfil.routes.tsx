import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Perfil from '../pages/Perfil'
import DetalhesMissa from '../pages/DetalhesMissa'
import { cores } from '../styles'

const RotasPerfil: React.FC = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { preto } = cores.neutras

	return (
		<Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: preto } }}>
			<Screen name="Perfil" component={Perfil} />
			<Screen name="DetalhesMissaPerfil" component={DetalhesMissa} />
		</Navigator>
	)
}

export default RotasPerfil