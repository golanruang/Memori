import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomMenu from '../bottomMenu';
import { Button } from 'react-native';

const SelectTopic = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Selecting Topic...</Text>
            <Button
                title="Go to QuestionPrompt"
                onPress={() => navigation.navigate('QuestionPrompt')}
            />
        </View>   
      );
}

export default SelectTopic;