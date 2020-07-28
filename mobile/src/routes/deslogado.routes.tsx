import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../pages/Main'
import Login from '../pages/Login'
import CadastrarUsuario from '../pages/CadastrarUsuario'

const LoginStack = createStackNavigator()

const RoutesDeslogado = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: '#000' } }}>

        <LoginStack.Screen name="Main" component={Main} />
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
      </LoginStack.Navigator>
    </NavigationContainer>
  )
}

export default RoutesDeslogado