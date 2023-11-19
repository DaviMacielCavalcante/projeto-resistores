import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Botao from "../components/ui/Botao";
import Cores from "../constants/Cores"

function CorScreen({navigation}) {

    const [cor_1, setCor1] = useState('');
    const [cor_2, setCor2] = useState('');
    const [cor_3, setCor3] = useState('');

    function corResultadoHandler() {
        navigation.navigate('CorResultadoScreen', { cor1: cor_1, cor2: cor_2, cor3: cor_3});
    }

    function primeiraCorHandler(primeiraCor) {
        switch (primeiraCor) {
            case "preto":
                setCor1(Cores.preto.cor)
                break;     
            case "marrom":
                setCor1(Cores.marrom.cor)
                break;
            case "vermelho":
                setCor1(Cores.vermelho.cor)
                break;   
            case "laranja":
                setCor1(Cores.laranja.cor)
                break;
            case "amarelo":
                setCor1(Cores.amarelo.cor)
                break;
            case "verde":
                setCor1(Cores.verde.cor)
                break;
            case "azul":
                setCor1(Cores.azul.cor)
                break;
            case "violeta":
                setCor1(Cores.violeta.cor)
                break;
            case "cinza":
                setCor1(Cores.cinza.cor)
                break;
            case "branco":
                setCor1(Cores.branco.cor)
                break;
            default:
                "white"
                break;
        }
    }

    function segundaCorHandler(segundaCor) {
        switch (segundaCor) {
            case "preto":
                setCor2(Cores.preto.cor)
                break;     
            case "marrom":
                setCor2(Cores.marrom.cor)
                break;
            case "vermelho":
                setCor2(Cores.vermelho.cor)
                break;   
            case "laranja":
                setCor2(Cores.laranja.cor)
                break;
            case "amarelo":
                setCor2(Cores.amarelo.cor)
                break;
            case "verde":
                setCor2(Cores.verde.cor)
                break;
            case "azul":
                setCor2(Cores.azul.cor)
                break;
            case "violeta":
                setCor2(Cores.violeta.cor)
                break;
            case "cinza":
                setCor2(Cores.cinza.cor)
                break;
            case "branco":
                setCor2(Cores.branco.cor)
                break;
            default:
                "white"
                break;
        }
    }3
    function terceiraCorHandler(terceiraCor) {
        switch (terceiraCor) {
            case "preto":
                setCor3(Cores.preto.cor)
                break;     
            case "marrom":
                setCor3(Cores.marrom.cor)
                break;
            case "vermelho":
                setCor3(Cores.vermelho.cor)
                break;   
            case "laranja":
                setCor3(Cores.laranja.cor)
                break;
            case "amarelo":
                setCor3(Cores.amarelo.cor)
                break;
            case "verde":
                setCor3(Cores.verde.cor)
                break;
            case "azul":
                setCor3(Cores.azul.cor)
                break;
            case "violeta":
                setCor3(Cores.violeta.cor)
                break;
            case "cinza":
                setCor3(Cores.cinza.cor)
                break;
            case "branco":
                setCor3(Cores.branco.cor)
                break;
            default:
                "white"
                break;
        }
    }

    return (
        <View style={styles.rootContainer}>
            <View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.txt
                    }>Insira a 1º cor: </Text>   
                    <View style={styles.inputContainer}>
                        <TextInput style
                        ={styles.txtInput} onChangeText={primeiraCorHandler}/> 
                    </View>         
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.txt
                    }>Insira a 2º cor: </Text>
                    <View style={styles.inputContainer}>
                        <TextInput style
                        ={styles.txtInput} onChangeText={segundaCorHandler}/> 
                    </View>
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.txt
                    }>Insira a 3º cor: </Text>
                    <View style={styles.inputContainer}>
                        <TextInput style
                        ={styles.txtInput} onChangeText={terceiraCorHandler}/> 
                    </View>
                </View>
            </View>
            <Botao onPress={corResultadoHandler}>ENVIAR</Botao>
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
        padding: 5,
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