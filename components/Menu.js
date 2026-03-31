import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Drawer } from 'react-native-paper';

const menuItems = [
    { key: 'home',         label: 'Home',         icon: 'home-outline' },
    { key: 'cart',         label: 'Cart',         icon: 'cart-outline' },
    { key: 'coupons',      label: 'Coupons',      icon: 'ticket-outline' },
    { key: 'transactions', label: 'Transactions', icon: 'receipt-outline' },
    { key: 'account',      label: 'Account',      icon: 'account-outline' },
    { key: 'settings',     label: 'Settings',     icon: 'cog-outline' },
    { key: 'contact',      label: 'Contact',      icon: 'email-outline' },
    { key: 'privacy',      label: 'Privacy',      icon: 'shield-outline' },
    { key: 'terms',        label: 'Terms',        icon: 'file-document-outline' },
];

const Menu = ({ onClose }) => {
    const { activeView, setActiveView, darkMode } = useContext(GlobalContext);

    const navigate = (key) => {
        setActiveView(key);
        if (onClose) onClose();
    };

    const titleStyle = { color: darkMode ? '#aaaaaa' : '#666666' };

    return (
        <Drawer.Section title="Navigation" titleStyle={titleStyle}>
            {menuItems.map((item) => (
                <Drawer.Item
                    key={item.key}
                    label={item.label}
                    icon={item.icon}
                    active={activeView === item.key}
                    onPress={() => navigate(item.key)}
                />
            ))}
        </Drawer.Section>
    );
};

export default Menu;