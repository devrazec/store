import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Switch, TouchableOpacity, Alert } from 'react-native';
import { GlobalContext } from '../context/GlobalContext';
import Header from '../components/Header';

const Settings = () => {
    const { darkMode, setDarkMode } = useContext(GlobalContext);
    const [notifications, setNotifications] = useState(true);
    const [newsletter, setNewsletter] = useState(false);
    const [locationServices, setLocationServices] = useState(false);

    const handleClearCache = () => {
        Alert.alert('Cache Cleared', 'App cache has been cleared successfully.');
    };

    const handleDeleteAccount = () => {
        Alert.alert(
            'Delete Account',
            'Are you sure you want to delete your account? This action cannot be undone.',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => {} },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.content}>

                    <Text style={styles.sectionTitle}>Appearance</Text>
                    <View style={styles.row}>
                        <View style={styles.rowText}>
                            <Text style={styles.rowLabel}>Dark Mode</Text>
                            <Text style={styles.rowSubLabel}>Switch between light and dark theme</Text>
                        </View>
                        <Switch value={darkMode} onValueChange={setDarkMode} />
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.sectionTitle}>Notifications</Text>
                    <View style={styles.row}>
                        <View style={styles.rowText}>
                            <Text style={styles.rowLabel}>Push Notifications</Text>
                            <Text style={styles.rowSubLabel}>Order updates and promotions</Text>
                        </View>
                        <Switch value={notifications} onValueChange={setNotifications} />
                    </View>
                    <View style={styles.row}>
                        <View style={styles.rowText}>
                            <Text style={styles.rowLabel}>Newsletter</Text>
                            <Text style={styles.rowSubLabel}>Receive weekly deals by email</Text>
                        </View>
                        <Switch value={newsletter} onValueChange={setNewsletter} />
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.sectionTitle}>Privacy</Text>
                    <View style={styles.row}>
                        <View style={styles.rowText}>
                            <Text style={styles.rowLabel}>Location Services</Text>
                            <Text style={styles.rowSubLabel}>Find stores near you</Text>
                        </View>
                        <Switch value={locationServices} onValueChange={setLocationServices} />
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.sectionTitle}>Account</Text>
                    <TouchableOpacity style={styles.button} onPress={handleClearCache}>
                        <Text style={styles.buttonText}>Clear Cache</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonDanger]} onPress={handleDeleteAccount}>
                        <Text style={[styles.buttonText, styles.buttonTextDanger]}>Delete Account</Text>
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <Text style={styles.versionText}>Store v1.0.0</Text>

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    sectionTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 13,
        color: '#888888',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 12,
        marginTop: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    rowText: {
        flex: 1,
        paddingRight: 16,
    },
    rowLabel: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 15,
        color: '#000000',
    },
    rowSubLabel: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
        color: '#888888',
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 20,
    },
    button: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 12,
    },
    buttonText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
        color: '#000000',
    },
    buttonDanger: {
        borderColor: '#e53935',
    },
    buttonTextDanger: {
        color: '#e53935',
    },
    versionText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
        color: '#aaaaaa',
        textAlign: 'center',
        marginTop: 8,
    },
});

export default Settings;

