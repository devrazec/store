import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import Header from '../components/Header';
import { GlobalContext } from '../context/GlobalContext';

const Account = () => {
    const { darkMode } = useContext(GlobalContext);
    const bg = darkMode ? '#1e1e1e' : '#ffffff';
    const textColor = darkMode ? '#ffffff' : '#000000';
    const subColor = darkMode ? '#aaaaaa' : '#666666';

    return (
        <View style={[styles.container, { backgroundColor: bg }]}>
            <Header />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.heading, { color: textColor }]}>My Account</Text>
                <Divider style={styles.divider} />

                <Text style={[styles.label, { color: subColor }]}>Name</Text>
                <Text style={[styles.value, { color: textColor }]}>Guest User</Text>

                <Text style={[styles.label, { color: subColor }]}>Email</Text>
                <Text style={[styles.value, { color: textColor }]}>guest@example.com</Text>

                <Divider style={styles.divider} />

                <Text style={[styles.heading, { color: textColor }]}>Order History</Text>
                <Text style={[styles.empty, { color: subColor }]}>No orders placed yet.</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 24,
    },
    heading: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 12,
    },
    label: {
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginTop: 16,
    },
    value: {
        fontSize: 16,
        marginTop: 4,
    },
    empty: {
        fontSize: 15,
        marginTop: 8,
        opacity: 0.7,
    },
    divider: {
        marginVertical: 16,
    },
});

export default Account;
