import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const DetalhesMissa = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack}>
                <Icon name="arrow-left" color="#fff" size={32} />
            </TouchableOpacity>

            <Text style={styles.text}>Tudo OK!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 48
    },

    text: {
        fontSize: 32,
        color: '#fff',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 280,
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
    }
});

export default DetalhesMissa