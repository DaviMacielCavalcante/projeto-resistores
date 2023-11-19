import { View, Text, StyleSheet } from "react-native";

import Botao from "../components/ui/Botao";

function CorResultadoScreen({navigation, route}) {    

    const cor1 = route.params.cor1;
    const cor2 = route.params.cor2;
    const cor3 = route.params.cor3;

    const styles2 = StyleSheet.create({
        corCont1: {
            backgroundColor: cor1
        },
        corCont2: {
            backgroundColor: cor2
        },
        corCont3: {
            backgroundColor: cor3
        }
    });

    
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
                <View style={[styles.faixaContainer1, styles2.corCont1]}>
                </View>
                <View style={[styles.faixaContainer2, styles2.corCont2]}>
                </View>
                <View style={[styles.faixaContainer3, styles2.corCont3]}>
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
        width: '30%', 
    },
    faixaContainer2: {
        width: '30%',
    },
    faixaContainer3: {
        width: '30%',
    }
});

export default CorResultadoScreen;