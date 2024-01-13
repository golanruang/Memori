import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from '../AppContext'

import HomeScreen from '../screens/home';
import SelectTopic from '../screens/select_topic';
import QuestionPrompt from '../screens/question_prompt';
import ModelResponse from '../screens/model_response';
import EndScreen from '../screens/EndScreen';
import LoadScreen from '../screens/load'
import BottomMenu from '../bottomMenu';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomMenu} options = {{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options = {{headerShown: false }} />
        <Stack.Screen name="SelectTopic" component={SelectTopic} />
        <Stack.Screen name="QuestionPrompt" component={QuestionPrompt} />
        <Stack.Screen name="ModelResponse" component={ModelResponse} />
        <Stack.Screen name="EndScreen" component={EndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </AppProvider>
  );
}