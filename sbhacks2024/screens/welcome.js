import React from "react";
import {
  Text,
  Pressable,
  Image,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("sbhacks2024/assets/homebackground.jpeg")} // Replace with your image path
        resizeMode="cover" // or "contain", depending on your need
        style={styles.imageBackground}
      >
        <View style={styles.contentContainer}>
          <Image
            source={require("sbhacks2024/assets/logo4.png")}
            style={styles.image}
          />
          <Text style={styles.titleText}>Memori</Text>
          <Text style={styles.baseText}>
            Preserving memories for generations to come
          </Text>

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Sign In")}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
            <Pressable
              style={styles.button2}
              onPress={() => navigation.navigate("Sign Up")}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    borderRadius: 20,
  },
  contentContainer: {
    margin: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: "center",
  },
  titleText: {
    fontSize: 60,
    textAlign: "center",
    fontFamily: "marcellus",
    color: "#261e29",
  },
  baseText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 16,
    fontFamily: "marcellus",
    paddingBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row", // Aligns buttons in a row
    justifyContent: "center", // Centers buttons horizontally
  },
  button: {
    backgroundColor: "#6c636b",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    margin: 5, // Add some margin to separate the buttons
  },
  button2: {
    backgroundColor: "#6c636b",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5, // Add some margin to separate the buttons
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "marcellus",
  },
});

export default WelcomeScreen;
