import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import Header from '../components/Header';
import { GlobalContext } from '../context/GlobalContext';

const Coupons = () => {
    const { darkMode } = useContext(GlobalContext);
    const bg = darkMode ? '#1e1e1e' : '#ffffff';
    const textColor = darkMode ? '#ffffff' : '#000000';
    const subColor = darkMode ? '#aaaaaa' : '#666666';
    const cardBg = darkMode ? '#2a2a2a' : '#f5f5f5';

    const coupons = [
        { code: 'WELCOME10', desc: '10% off your first order', expiry: '30 Apr 2026' },
        { code: 'SUMMER20',  desc: '20% off summer collection', expiry: '31 Jul 2026' },
        { code: 'FREESHIP',  desc: 'Free shipping on orders over $50', expiry: '31 Dec 2026' },
    ];

    return (
        <View style={[styles.container, { backgroundColor: bg }]}>
            <Header />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.heading, { color: textColor }]}>My Coupons</Text>
                <Divider style={styles.divider} />
                {coupons.map((c) => (
                    <View key={c.code} style={[styles.card, { backgroundColor: cardBg }]}>
                        <Text style={[styles.code, { color: textColor }]}>{c.code}</Text>
                        <Text style={[styles.desc, { color: subColor }]}>{c.desc}</Text>
                        <Text style={[styles.expiry, { color: subColor }]}>Expires: {c.expiry}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { padding: 24 },
    heading: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
    divider: { marginBottom: 16 },
    card: {
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    code: { fontSize: 18, fontWeight: '700', letterSpacing: 2, marginBottom: 4 },
    desc: { fontSize: 14, marginBottom: 4 },
    expiry: { fontSize: 12, opacity: 0.7 },
});

export default Coupons;
