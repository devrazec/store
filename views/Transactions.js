import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import Header from '../components/Header';
import { GlobalContext } from '../context/GlobalContext';

const Transactions = () => {
    const { darkMode } = useContext(GlobalContext);
    const bg = darkMode ? '#1e1e1e' : '#ffffff';
    const textColor = darkMode ? '#ffffff' : '#000000';
    const subColor = darkMode ? '#aaaaaa' : '#666666';
    const cardBg = darkMode ? '#2a2a2a' : '#f5f5f5';

    const transactions = [
        { id: 'TXN-001', date: '28 Mar 2026', amount: '$42.00', status: 'Completed' },
        { id: 'TXN-002', date: '15 Mar 2026', amount: '$18.50', status: 'Completed' },
        { id: 'TXN-003', date: '02 Mar 2026', amount: '$95.00', status: 'Refunded' },
    ];

    const statusColor = (status) => {
        if (status === 'Completed') return '#4caf50';
        if (status === 'Refunded') return '#f44336';
        return subColor;
    };

    return (
        <View style={[styles.container, { backgroundColor: bg }]}>
            <Header />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.heading, { color: textColor }]}>Transactions</Text>
                <Divider style={styles.divider} />
                {transactions.map((t) => (
                    <View key={t.id} style={[styles.card, { backgroundColor: cardBg }]}>
                        <View style={styles.row}>
                            <Text style={[styles.id, { color: textColor }]}>{t.id}</Text>
                            <Text style={[styles.amount, { color: textColor }]}>{t.amount}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={[styles.date, { color: subColor }]}>{t.date}</Text>
                            <Text style={[styles.status, { color: statusColor(t.status) }]}>{t.status}</Text>
                        </View>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    id: { fontSize: 15, fontWeight: '600' },
    amount: { fontSize: 15, fontWeight: '700' },
    date: { fontSize: 13 },
    status: { fontSize: 13, fontWeight: '600' },
});

export default Transactions;
