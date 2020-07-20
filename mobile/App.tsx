import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo'
import { useFonts, Cookie_400Regular } from '@expo-google-fonts/cookie'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Cookie_400Regular,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  );
}