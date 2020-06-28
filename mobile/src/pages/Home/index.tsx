import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()

    function handleNavigateToDetalhesMissa() {
        navigation.navigate('DetalhesMissa')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tudo Funcionando!</Text>

            <RectButton style={styles.button} onPress={handleNavigateToDetalhesMissa}>
                <View style={styles.buttonIcon}>
                    <Icon name="arrow-right" color="#fff" size={26} />
                </View>

                <Text style={styles.buttonText}>
                    Próxima Página
                </Text>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 32,
        color: '#fff',
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
    },

    button: {
        backgroundColor: '#34cb79',
        height: 60,
        width: 235,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 40
    },

    buttonIcon: {
        height: 60,
        width: 60,
        padding: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000000a'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        textShadowColor: '#00000088',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    }
});

export default Home