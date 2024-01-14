import React from "react";
import favicon from "../assets/favicon.png";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import memorilogo from "sbhacks2024/assets/logo4.png";
import { ImageBackground } from "react-native";

const auth = getAuth();

function SignUpScreen({ navigation }) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Sign In");
    } catch (error) {
      console.error("Firebase error", error);
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <ImageBackground
      source={require("sbhacks2024/assets/homebackground.jpeg")} // Replace with your image path
      style={styles.container}
      resizeMode="cover" // or "contain", depending on your need
    >
      <View style={styles.innerContainer}>
        <Image source={memorilogo} style={styles.image} />
        <Text style={styles.headerText}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <Icon name="email" size={18} color="gray" style={styles.icon} />
            <TextInput
              placeholder="Email"
              value={value.email}
              style={styles.input}
              onChangeText={(text) => setValue({ ...value, email: text })}
            />
          </View>

          <View style={styles.inputField}>
            <Icon name="lock" size={18} color="gray" style={styles.icon} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={(text) => setValue({ ...value, password: text })}
              secureTextEntry={true}
            />
          </View>
        </View>

        <Pressable style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <Text style={styles.footerText}>
          Have an account?{" "}
          <Text
            style={styles.signInText}
            onPress={() => navigation.navigate("Sign In")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "90%", // Adjust the width as needed
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  headerText: {
    color: "white",
    fontSize: 24, // Equivalent to text-2xl
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "marcellus",
    color: "#261e29",
  },
  inputContainer: {
    width: "100%",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30, // Equivalent to rounded-xl
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#bfb3ce", // Adjust as needed, equivalent to bg-gray-100
    marginTop: 10,
  },
  icon: {
    padding: 10,
    color: "#261e29",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    color: "#424244",
  },
  button: {
    backgroundColor: "#8d6f98",
    marginTop: 15,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 5,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "marcellus",
  },

  footerText: {
    color: "#261e29",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "marcellus",
  },
  signUpText: {
    color: "#8d6f98",
    fontWeight: "bold",
  },
});
