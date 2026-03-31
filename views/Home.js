import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Product from '../components/Product';

const Home = () => {

    const { dbProduct } = useContext(GlobalContext);

    return (
        <View style={styles.container}>
            <Header />
            <Product />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;