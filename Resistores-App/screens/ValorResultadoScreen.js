import { View, Text, StyleSheet} from "react-native";

import Botao from "../components/ui/Botao";

function ValorResultadoScreen({navigation, route}) {    

    const valor1 = route.params.valor1;
    const valor2 = route.params.valor2;
    const valor3 = route.params.valor3;

    
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
                <View style={styles.valoresContainer}>
                    <View>
                        <Text style={styles.txt}>{valor1}</Text>
                    </View>
                    <View>
                        <Text style={styles.txt}>{valor2}</Text>
                    </View>
                    <View>
                        <Text style={styles.txt}>{valor3}</Text>
                    </View>
                    <View>
                        <Text style={styles.txt}>Ohm</Text>
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
    valoresContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        paddingVertical: 40,
        backgroundColor: 'white',
        margin: 32,
        borderRadius: 10,
        height: '20%',
        width: '50%'
    }
});

export default ValorResultadoScreen;