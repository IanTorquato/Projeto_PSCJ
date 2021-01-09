import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Missas from '../pages/Missas'
import DetalhesMissa from '../pages/DetalhesMissa'
import { cores } from '../styles'

const RotasMissas: React.FC = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { preto } = cores.neutras

	return (
		<Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: preto } }}>
			<Screen name="Missas" component={Missas} />
			<Screen name="DetalhesMissa" component={DetalhesMissa} />
		</Navigator>
	)
}

export default RotasMissas