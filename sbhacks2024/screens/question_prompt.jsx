import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const ChatGPT35 = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [output, setOutput] = useState([]);

  const sendMessage = async (prompt) => {

    const userMessage = { role: 'user', content: prompt };
    setMessages([...messages, userMessage]);
    setInputText('');
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [...messages, userMessage],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
          },
        }
      );
      const botMessage = {
        role: 'bot',
        content: response.data.choices[0].message.content,
      };
      setMessages([...messages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
    setOutput(messages);
  };

  useEffect(() => {
    let prompt = `Generate a one to two sentence open ended question meant for an elderly citizen about this topic: ${'Youth'}`;
    sendMessage(prompt);
  },[]);

  return (
    <View> 
        {/* GPT-Textbox */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '40%' }}>
            <View style={{ width: 300, height: 200, backgroundColor: 'lightblue', padding: 16, borderRadius: 10 }}>
                <Text style={{ textAlign: 'left' }}>
                    {messages.map((message, index) => (
                    <Text key={index} style={{ color: message.role === 'user' ? 'blue' : 'green' }}>
                        {message.content}
                    </Text>
                ))}
                </Text>
            </View>
        </View>
    </View>
  );
};
export default ChatGPT35;