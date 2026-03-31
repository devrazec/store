import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Header from '../components/Header';

const Privacy = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.content}>
                    <Text style={styles.pageTitle}>Privacy Policy</Text>
                    <Text style={styles.updated}>Last updated: March 31, 2026</Text>

                    <Text style={styles.sectionText}>
                        At CarvedRock, your privacy is important to us. This Privacy Policy explains how
                        we collect, use, and protect your personal information when you use our mobile
                        application or website.
                    </Text>

                    <Text style={styles.sectionTitle}>1. Information We Collect</Text>
                    <Text style={styles.sectionText}>
                        We may collect the following types of information:{'\n\n'}
                        • <Text style={styles.bold}>Personal Information:</Text> Name, email address, shipping address, and payment details when you create an account or place an order.{'\n\n'}
                        • <Text style={styles.bold}>Usage Data:</Text> Pages visited, products viewed, search queries, and time spent in the app.{'\n\n'}
                        • <Text style={styles.bold}>Device Information:</Text> Device type, operating system, and unique device identifiers.
                    </Text>

                    <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
                    <Text style={styles.sectionText}>
                        We use the information we collect to:{'\n\n'}
                        • Process and fulfill your orders{'\n'}
                        • Send order confirmations and shipping updates{'\n'}
                        • Personalise your shopping experience{'\n'}
                        • Improve our products, services, and app performance{'\n'}
                        • Send promotional offers and newsletters (with your consent){'\n'}
                        • Comply with legal obligations
                    </Text>

                    <Text style={styles.sectionTitle}>3. Sharing Your Information</Text>
                    <Text style={styles.sectionText}>
                        We do not sell your personal information. We may share your data with trusted
                        third parties only as necessary to operate our business, including:{'\n\n'}
                        • Payment processors to handle transactions securely{'\n'}
                        • Shipping carriers to deliver your orders{'\n'}
                        • Analytics providers to help us understand app usage{'\n\n'}
                        All third parties are required to handle your data in accordance with applicable
                        privacy laws.
                    </Text>

                    <Text style={styles.sectionTitle}>4. Cookies &amp; Tracking</Text>
                    <Text style={styles.sectionText}>
                        Our app may use cookies and similar tracking technologies to enhance your
                        experience, remember your preferences, and analyse usage patterns. You can
                        control cookie settings through your device settings at any time.
                    </Text>

                    <Text style={styles.sectionTitle}>5. Data Security</Text>
                    <Text style={styles.sectionText}>
                        We implement industry-standard security measures to protect your personal
                        information from unauthorised access, disclosure, or loss. However, no method
                        of transmission over the internet is 100% secure, and we cannot guarantee
                        absolute security.
                    </Text>

                    <Text style={styles.sectionTitle}>6. Data Retention</Text>
                    <Text style={styles.sectionText}>
                        We retain your personal information for as long as your account is active or
                        as needed to provide services. You may request deletion of your account and
                        associated data at any time by contacting us.
                    </Text>

                    <Text style={styles.sectionTitle}>7. Your Rights</Text>
                    <Text style={styles.sectionText}>
                        Depending on your location, you may have the right to:{'\n\n'}
                        • Access the personal data we hold about you{'\n'}
                        • Correct inaccurate or incomplete data{'\n'}
                        • Request deletion of your data{'\n'}
                        • Opt out of marketing communications{'\n'}
                        • Lodge a complaint with a data protection authority{'\n\n'}
                        To exercise any of these rights, contact us at privacy@carvedrock.com.
                    </Text>

                    <Text style={styles.sectionTitle}>8. Children's Privacy</Text>
                    <Text style={styles.sectionText}>
                        Our services are not directed to children under the age of 13. We do not
                        knowingly collect personal information from children. If you believe a child
                        has provided us with personal data, please contact us immediately.
                    </Text>

                    <Text style={styles.sectionTitle}>9. Changes to This Policy</Text>
                    <Text style={styles.sectionText}>
                        We may update this Privacy Policy from time to time. Changes will be posted
                        within the app with a revised effective date. Continued use of CarvedRock
                        after changes are posted constitutes acceptance of the updated policy.
                    </Text>

                    <Text style={styles.sectionTitle}>10. Contact Us</Text>
                    <Text style={styles.sectionText}>
                        If you have questions or concerns about this Privacy Policy, please reach out:{'\n\n'}
                        privacy@carvedrock.com{'\n'}
                        CarvedRock Inc., 123 Trail Way, Boulder, CO 80301
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
        marginBottom: 16,
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
    bold: {
        fontFamily: 'OpenSans-Bold',
    },
});

export default Privacy;
