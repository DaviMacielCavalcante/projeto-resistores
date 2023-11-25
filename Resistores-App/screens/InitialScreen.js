import { View, Text, StyleSheet } from "react-native";

import Botao from "../components/ui/Botao";

function InitialScreen({navigation}) {

    function corHandler() {
        navigation.navigate('CorScreen');
    }

    function ajudaHandler() {
        navigation.navigate('AjudaScreen');
    }
    
    function valorHandler() {
        navigation.navigate('ValorNumericoScreen');
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.txtContainer}>
                <Text style={styles.txt}>O QUE VOCÊ DESEJA VERIFICAR?</Text>
            </View>            
            <View style={styles.contentContainer}>
                <Botao onPress={corHandler}>COR</Botao>
                <Botao onPress={valorHandler}>VALOR</Botao>
                <Botao onPress={ajudaHandler}>Ajuda</Botao>
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#FFB6C1',
        paddingVertical: 32,
        justifyContent: 'space-around'
    },
    contentContainer: {
        justifyContent: 'space-between',
    },
    txtContainer: {
        alignSelf: 'center'
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 32
    }
});

export default InitialScreen;