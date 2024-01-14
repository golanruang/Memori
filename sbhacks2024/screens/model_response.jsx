import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

const saveJournalToFirestore = async (topic, combinedJournal) => {
    const user = auth.currentUser;
    if (user) {
      try {
        await addDoc(collection(db, "users", user.uid, "journals"), {
          topic: topic,
          text: combinedJournal,
          createdAt: new Date()
        });
        console.log("Journal saved successfully");
      } catch (error) {
        console.error("Error saving journal: ", error);
        // Handle the error appropriately
      }
    }
  };

const ModelResponse = ({ route, navigation }) => {
    const { selectedTopic, journal } = route.params;
    const [journal2, setJournal2] = useState('');

    const handlePress = () => {
        const combinedJournal = journal + "\n" + journal2;
        saveJournalToFirestore(selectedTopic, combinedJournal);
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }], // Replace 'Main' with the name of your initial screen in UserStack
        });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Follow up question</Text>
            <Text>Prev response: {journal}</Text>
            <TextInput
                placeholder="Write your journal prompt here"
                value={journal2}
                onChangeText={setJournal2}
                multiline
            />
            <Button
                title="Go to EndScreen"
                onPress={handlePress}
            />
            <Button
                title="Question Prompt again"
                onPress={() => navigation.navigate('QuestionPrompt')}
            />
        </View>   
      );
}

export default ModelResponse;