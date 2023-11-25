import { View, Text, StyleSheet } from "react-native";

import Cores from "../constants/Cores";
import Botao from "../components/ui/Botao";

function AjudaScreen({navigation}) {

    function voltarHandler() {
        navigation.navigate('InitialScreen');
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.tituloContainer}>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>DICAS</Text>
                </View>                
            </View> 
            <View style={styles.faixasContainer}>
                <View style={styles.faixaContainer1}>
                    <Text style={styles.txtEx}>1º Cor</Text>
                </View>
                <View style={styles.faixaContainer2}>
                    <Text style={styles.txtEx}>2º Cor</Text>
                </View>
                <View style={styles.faixaContainer3}>
                        <Text style={styles.txtEx}>3º Cor</Text>
                </View>
            </View>   
            <View style={styles.tituloContainer2}>
                <View style={styles.txtContainer2}>
                    <Text style={styles.txtExplicacao}>Olá! Lemos as cores em um resistor, da ponta que não possui uma cor dourada ou prata, para a outra extremidade:</Text>
                    <Text style={styles.txtExplicacao}>1º Cor: Primeiro algarismo do valor da resistência</Text>
                    <Text style={styles.txtExplicacao}>2º Cor: Segundo algarismo do valor da resistência</Text>
                    <Text style={styles.txtExplicacao}>3º Cor: Número de casas da resistência</Text>
                </View>
            </View>               
            <View>
                <Botao onPress={voltarHandler}>VOLTAR</Botao>
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#FFB6C1',
        paddingVertical: 10,
    },
    txtContainer: {
        alignSelf: 'center',
        alignItems: 'baseline',
        padding: 40
    },
    txtContainer2: {
        alignSelf: 'center',
        alignItems: 'baseline',
        padding: 20
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 32
    },
    txtEx: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        padding: 5
    },
    txtExplicacao: {
        fontWeight: 'bold',
        fontSize: 16
    },
    tituloContainer: {
        backgroundColor: 'white',
        margin: 32,
        borderRadius: 10,
        height: '20%'
    },
    tituloContainer2: {
        backgroundColor: 'white',
        margin: 32,
        borderRadius: 10,
        height: '30%'
    },
    faixasContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
        flex: 1
    },
    faixaContainer1: {
        width: '30%', 
        backgroundColor: Cores.vermelho.cor
    },
    faixaContainer2: {
        width: '30%',
        backgroundColor: Cores.verde.cor
    },
    faixaContainer3: {
        width: '30%',
        backgroundColor: Cores.azul.cor
    }
});

export default AjudaScreen;