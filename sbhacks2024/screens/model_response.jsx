import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import AudioRecorder from './audio_recorder';

const ModelResponse = ({ navigation }) => {
    const [isRecording, setIsRecording] = useState(false);

    return (
        <View>
            {/* GPT-Textbox */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '40%' }}>
                <View style={{ width: 300, height: 200, backgroundColor: 'lightblue', padding: 16, borderRadius: 10 }}>
                    <Text style={{ textAlign: 'left' }}>
                        <Text>This is the GPT generated prompt</Text>
                    </Text>
                </View>
            </View>
            
            {/* Generate New Prompt */}
            <TouchableOpacity onPress={() => alert('Button Clicked')} style={{ marginTop: 16 }}>
                <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '35%' }}>
                    <View style={{ width: 300, height: 40, backgroundColor: 'blue', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Generate New Prompt</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Microphone */}
            <AudioRecorder navigation={navigation}/>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <Button
                    title="Go to EndScreen"
                    onPress={() => navigation.navigate('EndScreen')}
                />
                <Button
                    title="Question Prompt again"
                    onPress={() => navigation.navigate('QuestionPrompt')}
                />
            </View> 
        </View>
      );
}

export default ModelResponse;