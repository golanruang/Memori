import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import axios from "axios";
import * as Speech from "expo-speech";

const db = getFirestore();
const auth = getAuth();

const tts = () => {
  const allMessages = messages.map((message) => message.content).join(" ");
  Speech.speak(allMessages);
};

const saveJournalToFirestore = async (
  topic,
  firstOutput,
  firstJournal,
  secondOutput,
  secondJournal
) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await addDoc(collection(db, "users", user.uid, "journals"), {
        topic: topic,
        firstOutput: firstOutput,
        firstJournal: firstJournal,
        secondOutput: secondOutput,
        secondJournal: secondJournal,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error saving journal: ", error);
      // Handle the error appropriately
    }
  }
};

const ModelResponse = ({ route, navigation }) => {
  const { selectedTopic, journal1, firstOutput } = route.params;
  const [journal2, setJournal2] = useState("");
  const [messages, setMessages] = useState([]);
  const [output, setOutput] = useState([]);

  const handlePress = () => {
    saveJournalToFirestore(
      selectedTopic,
      firstOutput,
      journal1,
      output,
      journal2
    );
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }], // Replace 'Main' with the name of your initial screen in UserStack
    });
  };

  const sendMessage = async (prompt) => {
    const userMessage = { role: "user", content: prompt };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [...messages, userMessage],
          temperature: 1.0,
          max_tokens: 40,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
        }
      );
      const botMessage = {
        role: "bot",
        content: response.data.choices[0].message.content,
      };
      setMessages([...messages, botMessage]);
      console.log("setting output as: ", messages);
      setOutput(botMessage);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    let prompt = `Ask a casual open-ended related follow up question to this: ${journal1}`;
    sendMessage(prompt);
  }, []);

  return (
    <View>
      <Text style={styles.title}>Model Response:</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
          fontFamily: "marcellus",
        }}
      >
        <View
          style={{
            marginTop: 20,
            width: 350,
            height: 200,
            backgroundColor: "#bfb3ce",
            padding: 16,
            borderRadius: 10,
            borderWidth: 3, // Border width
            borderColor: "#8d6f98", // Border color
          }}
        >
          <Text style={styles.promptText}>
            {messages.map((message, index) => (
              <Text
                key={index}
                style={{
                  color: message.role === "user" ? "#bfb3ce" : "#261e29",
                }}
              >
                {output.content}
              </Text>
            ))}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%",
        }}
      >
        <Text style={styles.title}>Response:</Text>
        <TouchableOpacity style={styles.circleButton} onPress={tts}>
          <Image
            source={require("sbhacks2024/assets/sound.png")} // Replace with your image URL
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          fontFamily="marcellus"
          placeholder="Write your journal prompt here"
          fontSize={20}
          value={journal2}
          onChangeText={setJournal2}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.rectangleButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Finish Writing</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModelResponse;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circleButton: {
    marginTop: -120,
    width: 60, // Diameter of the circle
    height: 60, // Diameter of the circle
    borderRadius: 30, // Half of width/height to make it circular
    justifyContent: "center", // Center the image vertically
    alignItems: "center", // Center the image horizontally
    backgroundColor: "#bfb3ce", // Background color of the button
    marginBottom: 80,
  },
  rectangleButton: {
    backgroundColor: '#8d6f98', // Button color
    marginTop: 12,
    paddingVertical: 10, // Vertical padding
    borderRadius: 5, // Rounded corners of the rectangle
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: "#fff", // Text color
    fontSize: 20, // Text size
    fontFamily: "marcellus", // Font family if you have it
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "marcellus",
  },
  title: {
    marginTop: 80,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "marcellus",
    marginBottom: -60,
  },
  input: {
    width: 350,
    height: 200,
    backgroundColor: "#bfb3ce",
    marginTop: 60,
    padding: 16,
    borderRadius: 10,
    fontFamily: "marcellus",
    fontSize: 20,
    color: "#261e29", // Text color
    textAlignVertical: "top", // Align text to the top
    paddingHorizontal: 10, // Horizontal padding
    margin: 10, // Margin around the TextInput
    borderWidth: 3, // Border width
    borderColor: "#8d6f98", // Border color
    paddingRight: 10,
    paddingTop: 10,
    paddingLeft: 12,
  },
  buttonImage: {
    marginTop: 5,
    width: 150, // Width of the image (slightly less than the button for padding effect)
    height: 150, // Height of the image
    resizeMode: "contain", // Keep the image aspect ratio
  },
  promptText: {
    fontFamily: "marcellus",
    fontSize: 20,
  },
});