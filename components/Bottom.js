import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';

const routes = [
    { key: 'home',         title: 'Home',         focusedIcon: 'home',             unfocusedIcon: 'home-outline' },
    { key: 'coupons',      title: 'Coupons',      focusedIcon: 'ticket',           unfocusedIcon: 'ticket-outline' },
    { key: 'transactions', title: 'Transactions', focusedIcon: 'receipt',          unfocusedIcon: 'receipt-outline' },
    { key: 'cart',         title: 'Cart',         focusedIcon: 'cart',             unfocusedIcon: 'cart-outline' },
    
    //{ key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    //{ key: 'settings', title: 'Settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
];

export default function Bottom({ activeTab, onNavigate }) {
    const index = routes.findIndex((r) => r.key === activeTab);

    return (
        <BottomNavigation.Bar
            navigationState={{ index, routes }}
            onTabPress={({ route }) => onNavigate(route.key)}
            renderIcon={({ route, focused, color }) => (
                <MaterialCommunityIcons
                    name={focused ? route.focusedIcon : route.unfocusedIcon}
                    size={24}
                    color={color}
                />
            )}
            getLabelText={({ route }) => route.title}
        />
    );
}