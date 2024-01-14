import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from './screens/home';
import SelectTopicScreen from './screens/select_topic';
import Settings from './screens/Settings';
import { Image } from 'react-native'; 
import { StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

const BottomMenu = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false, 
          style: {
            height: 60,
          },
          tabStyle: {
            paddingTop: 5, 
            paddingBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("sbhacks2024/assets/home2.png")
                    : require("sbhacks2024/assets/home1.png")
                }
                style={{ width: 45, height: 45 }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="New Entry"
          component={SelectTopicScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("sbhacks2024/assets/add2.png")
                    : require("sbhacks2024/assets/add1.png")
                }
                style={{ width: 45, height: 45 }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Settings}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("sbhacks2024/assets/profile2.png")
                    : require("sbhacks2024/assets/profile1.png")
                }
                style={{ width: 60, height: 60 }}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    name: {
        fontFamily: 'marcellus',
    },
});

export default BottomMenu;