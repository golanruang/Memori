import React from 'react';
import favicon from "../assets/favicon.png";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Image, Pressable, StyleSheet, TextInput, Text, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function SignUpScreen({ navigation }) {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  });

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      console.error("Firebase error", error);
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
        <Text style={styles.headerText}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <Icon name="email" size={18} color="gray" style={styles.icon} />
            <TextInput
              placeholder='Email'
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
          Have an account? <Text style={styles.signInText} onPress={() => navigation.navigate('Sign In')}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1529', // Adjust as needed
  },
  innerContainer: {
    margin: 16,
    flex: 0.83, // Adjust as needed to mimic h-5/6
    justifyContent: 'center',
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
  },
  inputContainer: {
    width: '100%', // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    // Add space-y-6 equivalent if needed
  },
  inputField: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, // Adjust as needed, equivalent to rounded-xl
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0', // Adjust as needed, equivalent to bg-gray-100
    marginTop: 10, // Adjust as needed, equivalent to mt-1
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  button: {
    backgroundColor: 'blue', // Adjust as needed, equivalent to bg-blue
    borderRadius: 30, // Adjust as needed, equivalent to rounded-3xl
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16, // Adjust as needed, equivalent to text-base
  },
  footerText: {
    color: 'white',
    fontSize: 16, // Adjust as needed, equivalent to text-base
    textAlign: 'center',
  },
  signInText: {
    color: 'blue', // Adjust as needed, equivalent to text-blue
  }
  });