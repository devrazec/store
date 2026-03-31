import { createContext, useState } from 'react';
import jsonProduct from '../data/product.json';

export const GlobalContext = createContext();

const GlobalProvider = (props) => {
  
  const [darkMode, setDarkMode] = useState(false);
  const [dbProduct, setDbProduct] = useState(jsonProduct);
  const [activeView, setActiveView] = useState('home');

  return (
    <GlobalContext.Provider
      value={{
        darkMode, setDarkMode,
        dbProduct, setDbProduct,
        activeView, setActiveView,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

