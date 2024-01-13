import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

const ModelResponse = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Model Responding...</Text>
            <Button
                title="Go to EndScreen"
                onPress={() => navigation.navigate('EndScreen')}
            />
            <Button
                title="Question Prompt again"
                onPress={() => navigation.navigate('QuestionPrompt')}
            />
        </View>   
      );
}

export default ModelResponse;