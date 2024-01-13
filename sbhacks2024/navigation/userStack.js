import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import SelectTopic from '../screens/select_topic';
import QuestionPrompt from '../screens/question_prompt';
import ModelResponse from '../screens/model_response';
import EndScreen from '../screens/EndScreen'

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options = {{headerShown: false }} />
          <Stack.Screen name="SelectTopic" component={SelectTopic} />
          <Stack.Screen name="QuestionPrompt" component={QuestionPrompt} />
          <Stack.Screen name="ModelResponse" component={ModelResponse} />
          <Stack.Screen name="EndScreen" component={EndScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}