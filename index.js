/**
 * @format
 */

import { AppRegistry, useColorScheme } from 'react-native';
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import App from './App';
import { name as appName } from './app.json';
import GlobalProvider, { GlobalContext } from "./context/GlobalContext";
import { useContext } from 'react';

function ThemedApp() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <PaperProvider theme={darkMode ? MD3DarkTheme : MD3LightTheme}>
      <App />
    </PaperProvider>
  );
}

export default function Main() {
  return (
    <GlobalProvider>
      <ThemedApp />
    </GlobalProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
