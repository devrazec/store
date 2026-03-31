import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/Header';
import { GlobalContext } from '../context/GlobalContext';

const Cart = () => {
    const { darkMode } = useContext(GlobalContext);
    const bg = darkMode ? '#1e1e1e' : '#ffffff';
    const textColor = darkMode ? '#ffffff' : '#000000';

    return (
        <View style={[styles.container, { backgroundColor: bg }]}>
            <Header />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.empty, { color: textColor }]}>Your cart is empty.</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    empty: {
        fontSize: 18,
        opacity: 0.6,
    },
});

export default Cart;
