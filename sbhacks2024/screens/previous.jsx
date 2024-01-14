import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native-gesture-handler";

const PreviousScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Select");
  const handleSubmit = async () => {
    // if (!selectedCategory) {
    //   Alert.alert("Please select a category");
    //   return;
    // }

    // try {
    //   const response = await fetch("YOUR_BACKEND_ENDPOINT", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ category: selectedCategory }),
    //   });

    //   if (response.ok) {
    //     Alert.alert("Category submitted successfully");
    //     // Handle successful submission
    //   } else {
    //     // Handle errors
    //     Alert.alert("Submission failed");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   Alert.alert("An error occurred");
    // }
  };

  return (
    <ImageBackground
        source={require("sbhacks2024/assets/homebackground.jpeg")} // Specify the path to your background image
        style={styles.backgroundImage}
    >
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.title}>View Your Memories</Text>
            <Picker
            style={styles.pickerContainer}
            itemStyle={styles.pickerItem}
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
            }
            >
            <Picker.Item label="Select Category" value="Select" />
            <Picker.Item label="Youth" value="Youth" />
            <Picker.Item label="Relationships" value="Relationships" />
            <Picker.Item label="Hobbies" value="Hobbies" />
            <Picker.Item label="Achievements" value="Achievements" />
            <Picker.Item label="Wisdom" value="Wisdom" />
            <Picker.Item label="Recent Life" value="Recent Life" />
            </Picker>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 250,
    },
  title: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 40,
    marginRight: 40,
    fontFamily: "marcellus",
  },
  pickerContainer: {
    width: "75%",
    height: 65,
    marginBottom: 12,
  },
  button: {
    marginTop: 60,
    opacity: 0.87,
    backgroundColor: "#6c636b", 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3, 
    shadowColor: "#000000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 100,
  },
  buttonText: {
    color: "#ffffff", 
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "marcellus",
  },
  pickerItem: {
    height: 125, 
    fontSize: 20, 
    fontFamily: "marcellus",
  },
});

export default PreviousScreen;
