import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet  } from 'react-native';
import axios from 'axios';

const QuestionPrompt = ({ route, navigation }) => {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [journal, setJournal] = useState('');
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [output, setOutput] = useState([]);

    useEffect(() => {
        if (route.params?.selectedTopic) {
            setSelectedTopic(route.params.selectedTopic);
        }
    }, [route.params?.selectedTopic]);

    const handlePress = () => {
        // Pass both selectedTopic and journal to the ModelResponse screen
        navigation.navigate('ModelResponse', {
            selectedTopic: selectedTopic,
            journal: journal
        });
    };

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
        <TextInput
                style={styles.input}
                placeholder="Write your journal prompt here"
                value={journal}
                onChangeText={setJournal}
                multiline
            />
            <Button
                title="Go to ModelResponse"
                onPress={handlePress}
            />
    </View>
  );
};
export default QuestionPrompt;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center'
    }
});