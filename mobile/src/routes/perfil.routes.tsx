import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Perfil from '../pages/Perfil'
import DetalhesMissa from '../pages/DetalhesMissa'

const { Navigator, Screen } = createStackNavigator()

const RotasPerfil: React.FC = () => {
	return (
		<Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#000' } }}>
			<Screen name="Perfil" component={Perfil} />
			<Screen name="DetalhesMissaPerfil" component={DetalhesMissa} />
		</Navigator>
	)
}

export default RotasPerfil