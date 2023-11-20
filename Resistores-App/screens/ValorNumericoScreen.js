import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Botao from "../components/ui/Botao";
import Cores from "../constants/Cores";

function ValorNumericoScreen({navigation}) {

    const [valor_1, setValor1] = useState('');
    const [valor_2, setValor2] = useState('');
    const [valor_3, setValor3] = useState(undefined);

    const [cor_1, setCor1] = useState('');
    const [cor_2, setCor2] = useState('');
    const [cor_3, setCor3] = useState('');

    function valorResultadoHandler() {
        navigation.navigate('ResultadoScreen', { valor1: valor_1, valor2: valor_2, valor3:valor_3, cor1: cor_1, cor2: cor_2, cor3: cor_3});
    }

    function primeiroValorHandler(primeiroValor) {
        primeiroValor = primeiroValor.toLowerCase();
        switch (primeiroValor) {
            case "preto":
                setValor1(Cores.preto.valor);
                setCor1(Cores.preto.cor);
                break;     
            case "marrom":
                setValor1(Cores.marrom.valor);
                setCor1(Cores.marrom.cor);
                break;
            case "vermelho":
                setValor1(Cores.vermelho.valor);
                setCor1(Cores.vermelho.cor);
                break;   
            case "laranja":
                setValor1(Cores.laranja.valor);
                setCor1(Cores.laranja.cor);
                break;
            case "amarelo":
                setValor1(Cores.amarelo.valor);
                setCor1(Cores.amarelo.cor);
                break;
            case "verde":
                setValor1(Cores.verde.valor);
                setCor1(Cores.verde.cor);
                break;
            case "azul":
                setValor1(Cores.azul.valor);
                setCor1(Cores.azul.cor);
                break;
            case "violeta":
                setValor1(Cores.violeta.valor);
                setCor1(Cores.violeta.cor);
                break;
            case "cinza":
                setValor1(Cores.cinza.valor);
                setCor1(Cores.cinza.cor);
                break;
            case "branco":
                setValor1(Cores.branco.valor);
                setCor1(Cores.branco.cor);
                break;
            default:
                "white"
                break;
        }
    }

    function segundoValorHandler(segundoValor) {
        segundoValor = segundoValor.toLowerCase();
        switch (segundoValor) {
            case "preto":
                setValor2(Cores.preto.valor);
                setCor2(Cores.preto.cor);
                break;     
            case "marrom":
                setValor2(Cores.marrom.valor);
                setCor2(Cores.marrom.cor);
                break;
            case "vermelho":
                setValor2(Cores.vermelho.valor);
                setCor2(Cores.vermelho.cor);
                break;   
            case "laranja":
                setValor2(Cores.laranja.valor);
                setCor2(Cores.laranja.cor);
                break;
            case "amarelo":
                setValor2(Cores.amarelo.valor);
                setCor2(Cores.amarelo.cor);
                break;
            case "verde":
                setValor2(Cores.verde.valor);
                setCor2(Cores.verde.cor);
                break;
            case "azul":
                setValor2(Cores.azul.valor);
                setCor2(Cores.azul.cor);
                break;
            case "violeta":
                setValor2(Cores.violeta.valor);
                setCor2(Cores.violeta.cor);
                break;
            case "cinza":
                setValor2(Cores.cinza.valor);
                setCor2(Cores.cinza.cor);
                break;
            case "branco":
                setValor1(Cores.branco.valor);
                setCor1(Cores.branco.cor);
                break;
            default:
                "white"
                break;
        }
    }

    function terceiroValorHandler(terceiroValor) {
        terceiroValor = terceiroValor.toLowerCase();
        switch (terceiroValor) {
            case "preto":
                setValor3(Cores.preto.valor);
                setCor3(Cores.preto.cor);
                break;     
            case "marrom":
                setValor3(Cores.marrom.valor);
                setCor3(Cores.marrom.cor);
                break;
            case "vermelho":
                setValor3(Cores.vermelho.valor);
                setCor3(Cores.vermelho.cor);
                break;   
            case "laranja":
                setValor3(Cores.laranja.valor);
                setCor3(Cores.laranja.cor);
                break;
            case "amarelo":
                setValor3(Cores.amarelo.valor);
                setCor3(Cores.amarelo.cor);
                break;
            case "verde":
                setValor3(Cores.verde.valor);
                setCor3(Cores.verde.cor);
                break;
            case "azul":
                setValor3(Cores.azul.valor);
                setCor3(Cores.azul.cor);
                break;
            case "violeta":
                setValor3(Cores.violeta.valor);
                setCor3(Cores.violeta.cor);
                break;
            case "cinza":
                setValor3(Cores.cinza.valor);
                setCor3(Cores.cinza.cor);
                break;
            case "branco":
                setValor3(Cores.branco.valor);
                setCor3(Cores.branco.cor);
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
                    }>Insira o 1º valor: </Text>   
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.txtInput} onChangeText={primeiroValorHandler}/> 
                    </View>              
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.txt
                    }>Insira o 2º valor: </Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.txtInput} onChangeText={segundoValorHandler}/> 
                    </View>
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.txt
                    }>Insira o 3º valor: </Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.txtInput} onChangeText={terceiroValorHandler}/> 
                    </View>
                </View>
            </View>
            <Botao onPress={valorResultadoHandler}>ENVIAR</Botao>
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
        color: 'white',
        fontWeight: 'bold',
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 20
    },
    txtInput: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    }
});

export default ValorNumericoScreen;