import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalContext } from './context/GlobalContext';
import Home from './views/Home';
import Settings from './views/Settings';
import Contact from './views/Contact';
import Privacy from './views/Privacy';
import Terms from './views/Terms';
import Cart from './views/Cart';
import Account from './views/Account';
import Coupons from './views/Coupons';
import Transactions from './views/Transactions';
import Bottom from './components/Bottom';

const views = {
    home:         <Home />,
    cart:         <Cart />,
    coupons:      <Coupons />,
    transactions: <Transactions />,
    account:      <Account />,
    settings:     <Settings />,
    contact:      <Contact />,
    privacy:      <Privacy />,
    terms:        <Terms />,
};

export default function App() {
    const { activeView, setActiveView } = useContext(GlobalContext);

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                {views[activeView] ?? <Home />}
            </View>
            <Bottom activeTab={activeView} onNavigate={setActiveView} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screen: {
        flex: 1,
    },
});
