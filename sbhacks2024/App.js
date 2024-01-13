import './config/firebase'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
import { AppProvider } from '../sbhacks2024/AppContext'
import RootNavigation from './navigation/index';


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      // await new Promise(resolve => setTimeout(resolve, 2000));

      setLoading(false);
    };

    // fetchData();
  }, []);

  return (
    
    <RootNavigation />
    
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;