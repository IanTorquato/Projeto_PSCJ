import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Missas from '../pages/Missas'
import DetalhesMissa from '../pages/DetalhesMissa'

const { Navigator, Screen } = createStackNavigator()

const RotasMissas: React.FC = () => {
  return (
    <Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#000' } }}>
      <Screen name="Missas" component={Missas} />
      <Screen name="DetalhesMissa" component={DetalhesMissa} />
    </Navigator>
  )
}

export default RotasMissas