import React from "react";
import favicon from "../assets/favicon.png";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Image, Pressable, StyleSheet, TextInput, Text, View } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function SignInScreen({ navigation }) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={favicon} style={styles.image} />
        <Text style={styles.headerText}>Sign In</Text>

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
        <Pressable style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <Text style={styles.footerText}>
          Don't Have an account?{" "}
          <Text style={styles.signUpText} onPress={() => navigation.navigate("Sign Up")}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
);
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e1529', // Adjust the background color as needed
  },
  innerContainer: {
    width: '90%', // Adjust the width as needed
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  headerText: {
    color: 'white',
    fontSize: 24, // Equivalent to text-2xl
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    width: '100%',
    marginTop: 10,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30, // Equivalent to rounded-xl
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0', // Adjust as needed, equivalent to bg-gray-100
    marginTop: 10,
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    color: "#424242",
  },
  button: {
    backgroundColor: 'blue', // Adjust as needed, equivalent to bg-background
    borderRadius: 30, // Equivalent to rounded-3xl
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: 'blue', // Adjust as needed, equivalent to text-blue
    fontWeight: 'bold',
  },
});
