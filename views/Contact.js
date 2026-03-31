import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/Header';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (!name.trim() || !email.trim() || !message.trim()) {
            Alert.alert('Missing Fields', 'Please fill in your name, email, and message.');
            return;
        }
        Alert.alert('Message Sent', `Thanks, ${name}! We'll get back to you shortly.`);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <Header />
                <View style={styles.content}>
                    <Text style={styles.pageTitle}>Contact Us</Text>
                    <Text style={styles.intro}>
                        Have a question, a comment, or need help with an order? We'd love to hear from
                        you. Fill out the form below and our team will get back to you within 1–2
                        business days.
                    </Text>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Email</Text>
                        <Text style={styles.infoValue}>support@carvedrock.com</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Phone</Text>
                        <Text style={styles.infoValue}>1-800-555-0198</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Hours</Text>
                        <Text style={styles.infoValue}>Mon – Fri, 9am – 6pm MT</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Address</Text>
                        <Text style={styles.infoValue}>123 Trail Way, Boulder, CO 80301</Text>
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.formTitle}>Send Us a Message</Text>

                    <Text style={styles.label}>Name *</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Your full name"
                        placeholderTextColor="#aaa"
                    />

                    <Text style={styles.label}>Email *</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="your@email.com"
                        placeholderTextColor="#aaa"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Subject</Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        onChangeText={setSubject}
                        placeholder="What is this about?"
                        placeholderTextColor="#aaa"
                    />

                    <Text style={styles.label}>Message *</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={message}
                        onChangeText={setMessage}
                        placeholder="Write your message here..."
                        placeholderTextColor="#aaa"
                        multiline
                        numberOfLines={5}
                        textAlignVertical="top"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>SEND MESSAGE</Text>
                    </TouchableOpacity>
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
    pageTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 24,
        color: '#000000',
        marginBottom: 12,
    },
    intro: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        lineHeight: 22,
        color: '#333333',
        marginBottom: 24,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoLabel: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        color: '#000000',
        width: 80,
    },
    infoValue: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        color: '#333333',
        flex: 1,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 24,
    },
    formTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: '#000000',
        marginBottom: 16,
    },
    label: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 13,
        color: '#444444',
        marginBottom: 6,
        marginTop: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        color: '#000000',
        backgroundColor: '#fafafa',
    },
    textArea: {
        height: 120,
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 6,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 16,
    },
    buttonText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        color: '#ffffff',
        letterSpacing: 1,
    },
});

export default Contact;
