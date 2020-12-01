import React from "react";
import { Text, StyleSheet, View, Button, Alert, SafeAreaView  } from "react-native";

const HomeScreen = () => {
    const title = <Text style={styles.titleStyle}>Anan Game</Text>
    const hizliOyunButton = <Button title={'Hızlı Oyun'} onPress={() => Alert.alert('Hızlı Oyun pressed')}></Button>
    const oyunKurButton = <Button title={'Oyun Kur'} onPress={() => Alert.alert('Oyun Kur pressed')}></Button>

    return(
        <SafeAreaView>
            <View>
                {title}
            </View>
            <Separator />
            <View>
                {hizliOyunButton}
                {oyunKurButton}
            </View>
        </SafeAreaView>
    );
};
const Separator = () => (
    <View style={styles.separator} />
);
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        color: 'orange'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default HomeScreen;