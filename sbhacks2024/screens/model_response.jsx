import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Button } from 'react-native';
import axios from 'axios';

const ModelResponse = ({ generatedText }) => {
    return (
      <View style={styles.container}>
        <View style={styles.rectangle}>
          <Text style={styles.generatedText}>{generatedText}</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    rectangle: {
      backgroundColor: '#0073e6', // Change to your desired background color
      padding: 20,
    },
    generatedText: {
      color: 'white', // Change to your desired text color
      fontSize: 18, // Adjust the font size as needed
    },
  });
  
export default ModelResponse;



// const ModelResponse = ({ navigation, time_period=0}) => {
//     const [messages, setMessages] = useState([]);
//     const [inputText, setInputText] = useState('');
//     const time_periods = ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70'];
  
//     useEffect(() => {
//       promptGPT(time_periods[time_period]);
//     }, []); 
  
//     const promptGPT = async (timePeriod) => {
//       const prompt = `Generate an open-ended prompt that will allow the elderly to tell a story about their past when they were ${timePeriod} years old.`;
//       const userMessage = { role: 'user', content: prompt };
//       setMessages([userMessage]);
  
//       try {
//         const response = await axios.post(
//           'https://api.openai.com/v1/chat/completions',
//           {
//             model: 'text-davinci-003', // Change this to 'text-davinci-004' for GPT-4
//             messages: [userMessage],
//           },
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': OPEN_AI_KEY,
//             },
//           }
//         );
  
//         const botMessage = {
//           role: 'bot',
//           content: response.data.choices[0].message.content,
//         };
  
//         setMessages([...messages, botMessage]);
//       } catch (error) {
//         console.error('Error sending message:', error);
//       }
//     };
  
//     return (
//       <View>
//         {messages.map((message, index) => (
//           <Text key={index} style={{ color: message.role === 'user' ? 'blue' : 'green' }}>
//             {message.content}
//           </Text>
//         ))}
//         <TextInput
//           style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//           onChangeText={text => setInputText(text)}
//           value={inputText}
//         />
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//     );
//   };