import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Perfil: React.FC = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>Aqui é o Perfil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#444',
    flex: 1
  },
})

export default Perfil