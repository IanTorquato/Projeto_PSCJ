import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Svg, { G, Path } from 'react-native-svg'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const Perfil: React.FC = () => {
  return (
    <View style={styles.viewContainer}>
      <Svg width="100%" height={360} viewBox="0 0 500 500" fill="none">
        <G>
          <Path
            d="M0 0h500v280.095a700.272 700.272 0 01-492.576 2.743L0 276.095V0z"
            fill="#333"
            fillOpacity={0.8}
          />
        </G>

        <View style={{}}>
          <FontAwesome name="user-edit" size={25} color="#fff" />
          <Text style={{}}>Ana Clara</Text>
        </View>
      </Svg>

      <Text style={styles.txtMissas}>Missas Cadastradas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#444',
    flex: 1
  },

  txtMissas: {
    borderBottomColor: '#ffb02c',
    borderBottomWidth: 1,
    borderTopColor: '#ffb02c',
    borderTopWidth: 1,
    color: '#ffb02c',
    fontFamily: 'Cinzel_400Regular',
    fontSize: 40,
    paddingVertical: 8,
    textAlign: 'center',
    textShadowColor: '#000000dd',
    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 15,
    width: '100%'
  },
})

export default Perfil