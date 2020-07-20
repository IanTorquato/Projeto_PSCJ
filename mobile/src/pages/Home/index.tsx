import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const fundoLogin = require('../../assets/fundoLogin.jpg')
const logo = require('../../../assets/icon.png')

const Home = () => {
    const navigation = useNavigation()

    function handleNavigateToDetalhesMissa() {
        navigation.navigate('DetalhesMissa')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={fundoLogin} style={styles.fundoLogin}>
                <Image source={logo} style={styles.imgLogo} />

                <View style={styles.fundoTxtSagrado}>
                    <Text style={styles.txtSagrado}>Paróquia Sagrado Coração de Jesus</Text>
                </View>

                <View style={styles.viewBtns}>
                    <RectButton onPress={handleNavigateToDetalhesMissa}>
                        <Text style={styles.textoBtns}>Entrar</Text>
                    </RectButton>
                </View>
                <View style={styles.viewBtns}>
                    <RectButton onPress={handleNavigateToDetalhesMissa}>
                        <Text style={styles.textoBtns}>Cadastrar</Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    fundoLogin: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
    },

    imgLogo: {
        width: 130,
        top: 80,
        resizeMode: 'contain'
    },

    fundoTxtSagrado: {
        width: '85%',
        paddingBottom: 5,
        top: 70,
        backgroundColor: '#e41e2577',
        borderRadius: 25
    },

    txtSagrado: {
        fontFamily: 'Cookie_400Regular',
        fontSize: 42,
        lineHeight: 53,
        textAlign: 'center',
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 4 },
        textShadowRadius: 5,
    },

    viewBtns: {
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 50,
        top: 120,
        marginTop: 30,
        backgroundColor: '#00000077',
        height: 50,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBtns: {
        fontFamily: 'Roboto_400Regular',
        color: '#fff',
        fontSize: 24,
        textShadowColor: '#00000088',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    }
});

export default Home