import { View, Text, StyleSheet } from "react-native";

import Botao from "../components/ui/Botao";
import Cores from "../constants/Cores";

function CorResultadoScreen({navigation, cor1, cor2, cor3}) {
    
    function voltarHandler() {
        navigation.navigate('InitialScreen');
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.tituloContainer}>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>RESULTADO</Text>
                </View>                
            </View>        
            <View style={styles.faixasContainer}>
                <View style={styles.faixaContainer1}>
                </View>
                <View style={styles.faixaContainer2}>
                </View>
                <View style={styles.faixaContainer3}>
                </View>
            </View>    
            <View style={styles.contentContainer}>
                <Botao onPress={voltarHandler}>VOLTAR</Botao>
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#FFB6C1',
        paddingVertical: 32,
    },
    txtContainer: {
        alignSelf: 'center',
        alignItems: 'baseline',
        padding: 40
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 32
    },
    tituloContainer: {
        backgroundColor: 'white',
        margin: 32,
        borderRadius: 10,
        height: '20%'
    },
    faixasContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        paddingHorizontal: 60
    },
    faixaContainer1: {
        backgroundColor: Cores.amarelo.cor,
        width: '30%', 
    },
    faixaContainer2: {
        backgroundColor: Cores.verde.cor,
        width: '30%',
    },
    faixaContainer3: {
        backgroundColor: Cores.preto.cor,
        width: '30%',
    }
});

export default CorResultadoScreen;