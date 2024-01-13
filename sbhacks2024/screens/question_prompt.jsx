import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

const QuestionPrompt = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Prompting Question...</Text>
            <Button
                title="Go to ResponsePage"
                onPress={() => navigation.navigate('ResponsePage')}
            />
        </View>   
      );
}

export default QuestionPrompt;