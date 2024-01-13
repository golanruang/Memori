import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// const { Configuration, OpenAIApi } = require('openai');
// import {OPENAI_API_KEY} from "@env"
const OpenAIApi = require('openai');
import {createSession} from "better-sse";

const session = await createSession(req, res);
if (!session.isConnected) throw new Error('Not connected');

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

// const openai = new OpenAIApi(configuration);

// require('dotenv').config();
console.log("key: ", process.env);

let key = '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'

const openai = new OpenAIApi({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: key,
    dangerouslyAllowBrowser: true,
});

const ResponsePage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

//   const handleInput = async () => {
//     try {
//         const userInput = input
//         const stream = await openai.chat.completions.create({
//             messages: [{ role: 'user', content: `Generate a conversational prompt for the elderly based on when they were ${"10-20"} years old.` }],
//             model: "gpt-3.5-turbo",
//             stream: true,
//         });

//         let apiResponse = '';

//         for await (const chunk of stream) {
//             const responseChunk = chunk.choices[0]?.delta?.content || '';
            
//             // process.stdout.write(chunk.choices[0]?.delta?.content || '');
//         }
//     } catch (error) {
//         console.log(error);
//     }

//     setInput('');
//   };
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
}
  return (
    <Rectangle>
        <Text>Hi!</Text>
    </Rectangle>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    chatContainer: {
      width: '90%',
      height: '70%',
      borderWidth: 1,
      borderRadius: 10,
      overflow: 'hidden',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#F2F2F2',
    },
    input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderRadius: 20,
      padding: 10,
      marginRight: 10,
      backgroundColor: '#fff',
    },
    sendButton: {
      backgroundColor: '#2196F3',
      padding: 10,
      borderRadius: 20,
    },
    sendButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    outputContainer: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
    },
    output: {
      fontSize: 16,
    },
  });
  
  export default ResponsePage;