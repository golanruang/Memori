import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from '../sbhacks2024/AppContext'

import HomeScreen from '../sbhacks2024/screens/home';
import LoadScreen from '../sbhacks2024/screens/load'
import BottomMenu from '../sbhacks2024/bottomMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={BottomMenu} options = {{headerShown: false}}/>
          <Stack.Screen name="Load" component={LoadScreen} options = {{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});