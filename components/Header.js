import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import Menu from './Menu';

const Header = () => {

    const { darkMode, setDarkMode, activeView } = useContext(GlobalContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Appbar.Header>
                <Appbar.Action
                    icon="menu"
                    onPress={() => setMenuOpen(true)}
                />
                <Appbar.Content title={activeView.charAt(0).toUpperCase() + activeView.slice(1)} titleStyle={styles.title} />
                <Appbar.Action
                    icon={darkMode ? 'white-balance-sunny' : 'weather-night'}
                    onPress={() => setDarkMode(!darkMode)}
                />
            </Appbar.Header>

            <Modal
                visible={menuOpen}
                transparent
                animationType="slide"
                onRequestClose={() => setMenuOpen(false)}
            >
                <View style={styles.overlay}>
                    <TouchableOpacity
                        style={styles.backdrop}
                        onPress={() => setMenuOpen(false)}
                        activeOpacity={1}
                    />
                    <View style={[styles.drawer, { backgroundColor: darkMode ? '#1e1e1e' : '#ffffff' }]}>
                        <Menu onClose={() => setMenuOpen(false)} />
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
    overlay: {
        flex: 1,
        flexDirection: 'row',
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    drawer: {
        width: 280,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        paddingTop: 50,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});

export default Header;