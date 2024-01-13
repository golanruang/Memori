import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

const EndScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>End Screen!</Text>
            {/* <Button
                title="Go to EndScreen"
                onPress={() => navigation.navigate('EndScreen')}
            /> */}
        </View>   
      );
}

export default EndScreen;