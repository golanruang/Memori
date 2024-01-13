import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from '../sbhacks2024/AppContext'

import HomeScreen from '../sbhacks2024/screens/home';
import SelectTopic from '../sbhacks2024/screens/select_topic';
import QuestionPrompt from '../sbhacks2024/screens/question_prompt';
import ResponsePage from './screens/response_page';
import EndScreen from '../sbhacks2024/screens/EndScreen';
import LoadScreen from '../sbhacks2024/screens/load'
import BottomMenu from '../sbhacks2024/bottomMenu';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={BottomMenu} options = {{headerShown: false}}/>
          <Stack.Screen name="Home" component={HomeScreen} options = {{headerShown: false }} />
          <Stack.Screen name="SelectTopic" component={SelectTopic} options = {{headerShown: false }} />
          <Stack.Screen name="QuestionPrompt" component={QuestionPrompt} options = {{headerShown: false }} />
          <Stack.Screen name="ResponsePage" component={ResponsePage} options = {{headerShown: false }} />
          <Stack.Screen name="EndScreen" component={EndScreen} options = {{headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
    
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