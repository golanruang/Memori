import './config/firebase'
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import RootNavigation from './navigation/index';


const loadFonts = () => {
  return Font.loadAsync({
    'marcellus': require('sbhacks2024/assets/fonts/marcellus.ttf'),
    'karla-bold': require('sbhacks2024/assets/fonts/karlabold.ttf'),
    'karla-semi': require('sbhacks2024/assets/fonts/karlasemi.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    loadFonts().then(() => {
      setFontsLoaded(true);
    }).catch(error => {
      console.error("Font loading error: ", error);
    });
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  // Once fonts are loaded, render the RootNavigation
  return <RootNavigation />;
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;