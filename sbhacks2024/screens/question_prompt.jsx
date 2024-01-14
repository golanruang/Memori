import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const QuestionPrompt = ({ route, navigation }) => {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [journal, setJournal] = useState('');

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

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Prompting Question for: {selectedTopic}</Text>
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
    
    export default QuestionPrompt;