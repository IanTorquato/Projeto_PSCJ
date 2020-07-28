import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo'
import { useFonts, Cookie_400Regular } from '@expo-google-fonts/cookie'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Lora_400Regular } from '@expo-google-fonts/lora'

import Routes from './src/routes'
import { LoginProvider } from './src/contexts/login'

export default function App() {
  const [fontsLoaded, error] = useFonts({ Cookie_400Regular, Roboto_400Regular, Lora_400Regular })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <LoginProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </LoginProvider>
  )
}