import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import AudioRecorder from './audio_recorder';
import openai from 'openai';

const ModelResponse = ({ navigation }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

const handleInput = async () => {
    try {
        const userInput = input;
        const response = await openai.Completion.create({
        engine: 'gpt-3.5-turbo', // or use 'gpt-3.5-turbo'
        prompt: `Generate a conversational prompt for the elderly based on when they were ${"10-20"} years old.`,
        });

        console.log(response);
    } catch (error) {
        console.log(error);
    }
    };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* GPT-Textbox */}
      <View style={{ width: 300, height: 200, backgroundColor: 'lightblue', padding: 16, borderRadius: 10 }}>
        <Text>This is the GPT generated prompt</Text>
      </View>

      {/* Generate New Prompt */}
      <TouchableOpacity onPress={handleInput} style={{ marginTop: 16 }}>
        <View style={{ width: 300, height: 40, backgroundColor: 'blue', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Generate New Prompt</Text>
        </View>
      </TouchableOpacity>

      {/* Microphone */}
      <AudioRecorder navigation={navigation} />

      <View style={{ marginTop: 16 }}>
        <Button title="Go to EndScreen" onPress={() => navigation.navigate('EndScreen')} />
        <Button title="Question Prompt again" onPress={() => navigation.navigate('QuestionPrompt')} />
      </View>
    </View>
  );
};

export default ModelResponse;
