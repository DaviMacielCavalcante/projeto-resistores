import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Botao from "../components/ui/Botao";
import Cores from "../constants/Cores";

function CorResultadoScreen({navigation, cor1, cor2, cor3}) {    
    
    function voltarHandler() {
        navigation.navigate('InitialScreen');
    }

    const [primeiraCor, setPrimeiraCor] = useState('white');
    const [segundaCor, setSegundaCor] = useState('white');
    const [terceiraCor, setTerceiraCor] = useState('white');

    useEffect(() => {
        function coresEscolhidas(cor_1, cor_2, cor_3) {
          let primeira = 'white';
          let segunda = 'white';
          let terceira = 'white';
    
          switch (cor_1) {
            case 'vermelho':
              primeira = Cores.vermelho.cor;
              break;
            default:
              primeira = 'white';
              break;
          }
          switch (cor_2) {
            case 'vermelho':
              segunda = Cores.vermelho.cor;
              break;
            default:
              segunda = 'white';
              break;
          }
          switch (cor_3) {
            case 'vermelho':
              terceira = Cores.vermelho.cor;
              break;
            default:
              terceira = 'white';
              break;
          }
    
          setPrimeiraCor(primeira);
          setSegundaCor(segunda);
          setTerceiraCor(terceira);
        }
    
        coresEscolhidas(cor1, cor2, cor3);
      }, [cor1, cor2, cor3]);

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