import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from '../AppContext'
import { ChatGptProvider } from 'react-native-chatgpt';


import HomeScreen from '../screens/home';
import SelectTopic from '../screens/select_topic';
import QuestionPrompt from '../screens/question_prompt';
import PreviousScreen from '../screens/previous';
import ModelResponse from '../screens/model_response';
import EndScreen from '../screens/EndScreen';
import LoadScreen from '../screens/load'
import JournalDetailScreen from "../screens/JournalScreen";
import BottomMenu from '../bottomMenu';
import DisplayByTopic from "../screens/DisplayByTopic";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomMenu} options = {{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options = {{headerShown: false }} />
        <Stack.Screen name="JournalDetailScreen" component={JournalDetailScreen} options = {{headerShown: false}} />
        <Stack.Screen name="PreviousScreen" component={PreviousScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="SelectTopic" component={SelectTopic} options = {{headerShown: false}} />
        <Stack.Screen name="QuestionPrompt" component={QuestionPrompt} options = {{headerShown: false}} />
        <Stack.Screen name="ModelResponse" component={ModelResponse} options = {{headerShown: false}} />
        <Stack.Screen name="DisplayByTopic" component={DisplayByTopic} options = {{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  </AppProvider>
  );
}