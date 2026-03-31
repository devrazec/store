import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import Header from '../components/Header';

const About = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <Image
                    style={styles.heroImage}
                    source={require('../assets/shutterstock_440789620.jpg')}
                />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>We Love New Adventures</Text>
                    <Text style={styles.sectionText}>
                        Whether attacking the mountain that is the top of your bucket list, or tackling a
                        challenging climbing wall, we have you covered. We constantly upgrade our stock with
                        the newest and best gear. We pride ourselves on stocking the safest equipment at
                        great prices.
                    </Text>
                </View>

                <Image
                    style={styles.sectionImage}
                    source={require('../assets/shutterstock_492010117.jpg')}
                />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>How We Started</Text>
                    <Text style={styles.sectionText}>
                        CarvedRock started for purely selfish reasons. Our founder, John Doe, was an
                        adventurer from the start. Between rafting on the Amazon and climbing Everest he
                        tried to do it all. Over time he learned that finding the best gear was a job of its
                        own — boots from one store, tents and climbing supplies from another. John wished
                        there was a one-stop shop for all of it. Since he couldn't find what he wanted,
                        CarvedRock was born.
                    </Text>
                </View>

                <Image
                    style={styles.sectionImage}
                    source={require('../assets/shutterstock_273547007.jpg')}
                />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Where Can You Find Us</Text>
                    <Text style={styles.sectionText}>
                        With 15 locations across 6 states you may find a brick-and-mortar store nearby.
                        No worries if a store isn't close — you can always shop on CarvedRock.com. And
                        now with our new mobile app you can shop directly from your phone, anytime.
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
    heroImage: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
    },
    sectionImage: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    sectionTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: 12,
        color: '#000000',
    },
    sectionText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        lineHeight: 24,
        color: '#333333',
    },
});

export default About;