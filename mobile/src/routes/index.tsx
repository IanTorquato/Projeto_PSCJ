import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import { useContextLogin } from '../contexts/login'
import RoutesLogado from '../routes/logado.routes'
import RoutesDeslogado from '../routes/deslogado.routes'

const Routes = () => {
  const { logado, loading } = useContextLogin()

  if (loading) {
    return (
      <View style={styles.viewCarregando}>
        <ActivityIndicator size={64} color="#fff" />
      </View>
    )
  }

  return logado ? <RoutesLogado /> : <RoutesDeslogado />
}

const styles = StyleSheet.create({
  viewCarregando: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default Routes