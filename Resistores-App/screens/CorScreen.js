import { View, Text, StyleSheet, TextInput } from "react-native";

import Botao from "../components/ui/Botao";

function CorScreen() {
    return (
        <View style={styles.rootContainer}>
            <View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.txt
                    }>Insira a 1º cor: </Text>   
                    <View style={styles.   inputContainer}>
                        <TextInput style
                        ={styles.txtInput}/> 
                    </View>         
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.txt
                    }>Insira a 2º cor: </Text>
                    <View style={styles.   inputContainer}>
                        <TextInput style
                        ={styles.txtInput}/> 
                    </View>
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.txt
                    }>Insira a 3º cor: </Text>
                    <View style={styles.   inputContainer}>
                        <TextInput style
                        ={styles.txtInput}/> 
                    </View>
                </View>
            </View>
            <Botao>ENVIAR</Botao>
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
    inputsContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    inputContainer: {
        backgroundColor: '#ccc',
        width: '50%',
        height: '50%',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        fontWeight: 'bold',
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 20
    },
    txtInput: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default CorScreen;