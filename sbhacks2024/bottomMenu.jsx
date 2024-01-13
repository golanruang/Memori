import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from './screens/home';
import SelectTopicScreen from './screens/select_topic';

const Tab = createBottomTabNavigator();

export default function BottomMenu() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options = {{headerShown: false}}/>
            <Tab.Screen name="SelectTopic" component={SelectTopicScreen} options = {{headerShown: false}}/>
        </Tab.Navigator>   
    );
  }
