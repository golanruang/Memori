import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import AudioRecorder from './audio_recorder';
// import { useChatCompletion } from 'openai-streaming-hooks';

// Dependencies for callable functions.
// const {onCall, HttpsError} = require("firebase-functions/v2/https");
// const {logger} = require("firebase-functions/v2");

// // Dependencies for the addMessage function.
// const {getDatabase} = require("firebase-admin/database");
// const sanitizer = require("./sanitizer");

const ModelResponse = ({ navigation }) => {
    
    // const { messages, submitPrompt } = useChatCompletion({
    //     model: 'gpt-3.5-turbo', 
    //     apiKey: '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', 
    //     temperature: 0.5,
    //   });


    // useEffect((time_period) => {
    //     let prompt_text = `Generate an open ended question for the user about when they were ${'10-20'} years old.`;
    //     submitPrompt([{ content: prompt_text, role: 'user' }]);
    // }, []);

    const getGPTOutput = () => {
        // call firebase function and get GPT 

    }

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
            <TouchableOpacity onPress={handleSendMessage} style={{ marginTop: 16 }}>
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
}

export default ModelResponse;