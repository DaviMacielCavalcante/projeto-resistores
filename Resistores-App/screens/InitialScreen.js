import { View, Text, StyleSheet } from "react-native";

import Botao from "../components/ui/Botao";

function InitialScreen() {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.txtContainer}>
                <Text style={styles.txt}>O QUE VOCÊ DESEJA VERIFICAR?</Text>
            </View>            
            <View style={styles.contentContainer}>
                <Botao>COR</Botao>
                <Botao>VALOR</Botao>
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