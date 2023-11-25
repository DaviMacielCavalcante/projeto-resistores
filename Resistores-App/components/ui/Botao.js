import { View, Text, StyleSheet, Pressable } from "react-native";

function Botao({children, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.btnContainer}>
                <Text style={styles.txtBtn}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: 'white',
        margin: 32,
        borderRadius: 10
    },
    txtBtn: {
        padding: 16,
        fontWeight: 'bold',
        fontSize: 32,
        alignSelf: 'center'
    }
});

export default Botao;