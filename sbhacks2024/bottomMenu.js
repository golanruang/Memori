import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home';
import SelectTopicScreen from './screens/select_topic';

const Tab = createBottomTabNavigator();

export default function BottomMenu() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Select Topic" component={SelectTopicScreen} />
      </Tab.Navigator>
    );
  }