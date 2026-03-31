import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Header from '../components/Header';

const Terms = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.content}>
                    <Text style={styles.pageTitle}>Terms &amp; Conditions</Text>
                    <Text style={styles.updated}>Last updated: March 31, 2026</Text>

                    <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
                    <Text style={styles.sectionText}>
                        By accessing or using the CarvedRock mobile application or website, you agree to
                        be bound by these Terms and Conditions. If you do not agree to these terms, please
                        do not use our services.
                    </Text>

                    <Text style={styles.sectionTitle}>2. Use of the Service</Text>
                    <Text style={styles.sectionText}>
                        You agree to use CarvedRock solely for lawful purposes. You may not use our
                        service to engage in any conduct that restricts or inhibits anyone's use or
                        enjoyment of the platform, or which may harm CarvedRock or its users.
                    </Text>

                    <Text style={styles.sectionTitle}>3. Product Information</Text>
                    <Text style={styles.sectionText}>
                        We strive to ensure that all product descriptions, images, and pricing are
                        accurate. However, we do not warrant that product descriptions or other content
                        is error-free. We reserve the right to correct any errors and to cancel orders
                        placed for products listed at incorrect prices.
                    </Text>

                    <Text style={styles.sectionTitle}>4. Orders &amp; Payments</Text>
                    <Text style={styles.sectionText}>
                        All orders are subject to availability and confirmation of the order price.
                        We reserve the right to refuse or cancel any order at our discretion. Payment
                        must be received in full before goods are dispatched.
                    </Text>

                    <Text style={styles.sectionTitle}>5. Returns &amp; Refunds</Text>
                    <Text style={styles.sectionText}>
                        Items may be returned within 30 days of purchase in their original condition
                        and packaging. Refunds will be issued to your original payment method within
                        5–10 business days of receiving the returned item. Sale items are final sale
                        and cannot be returned.
                    </Text>

                    <Text style={styles.sectionTitle}>6. Intellectual Property</Text>
                    <Text style={styles.sectionText}>
                        All content on this platform, including text, graphics, logos, and images, is
                        the property of CarvedRock and is protected by applicable copyright and
                        trademark laws. You may not reproduce or distribute any content without our
                        prior written consent.
                    </Text>

                    <Text style={styles.sectionTitle}>7. Limitation of Liability</Text>
                    <Text style={styles.sectionText}>
                        CarvedRock shall not be liable for any indirect, incidental, special, or
                        consequential damages arising out of your use of, or inability to use, our
                        services or products. Our total liability shall not exceed the amount paid for
                        the product giving rise to the claim.
                    </Text>

                    <Text style={styles.sectionTitle}>8. Changes to Terms</Text>
                    <Text style={styles.sectionText}>
                        We reserve the right to update these Terms and Conditions at any time. Changes
                        will be posted within the app and take effect immediately upon posting. Your
                        continued use of CarvedRock after changes are posted constitutes your acceptance
                        of the revised terms.
                    </Text>

                    <Text style={styles.sectionTitle}>9. Contact Us</Text>
                    <Text style={styles.sectionText}>
                        If you have any questions about these Terms and Conditions, please contact us at:
                        {'\n\n'}legal@carvedrock.com{'\n'}CarvedRock Inc., 123 Trail Way, Boulder, CO 80301
                    </Text>
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
        marginBottom: 4,
    },
    updated: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 13,
        color: '#888888',
        marginBottom: 24,
    },
    sectionTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: '#000000',
        marginTop: 20,
        marginBottom: 6,
    },
    sectionText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        lineHeight: 22,
        color: '#333333',
    },
});

export default Terms;
