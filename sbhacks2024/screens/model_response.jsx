import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// const { Configuration, OpenAIApi } = require('openai');
// import {OPENAI_API_KEY} from "@env"
const OpenAIApi = require('openai');

// const session = await createSession(req, res);
// if (!session.isConnected) throw new Error('Not connected');

let key = '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'

const openai = new OpenAIApi({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: key,
    dangerouslyAllowBrowser: true,
});

const ModelResponse = ({ navigation }) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
  
  const generatePrompt = async () => {
    const { data } = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        n: 1,
        max_tokens: 2048,
        temperature: 0.3,
        stream: true,
        prompt: `Generate a conversational prompt for the elderly based on when they were ${"10-20"} years old.`
    }, {
        timeout: 1000 * 60 * 2,
        responseType: 'stream'
    });

    data.on('data', text => {
        const lines = text.toString().split('\n').filter(line => line.trim() !== '');
        for (const line of lines) {
            const message = line.replace(/^data: /, '');
            if (message === '[DONE]') { //OpenAI sends [DONE] to say it's over
                session.push('DONE', 'error');
            return;
            }
            try {
            const { choices } = JSON.parse(message);
                session.push({text:choices[0].text});
            } catch (err) {
                console.log(err);
            }
        }

        data.on('close', () => { 
        console.log("close")
        res.end();
    });

    data.on('error', (err) => {
        console.error(err);
    });

    });

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