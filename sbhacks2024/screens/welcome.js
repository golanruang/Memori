import React from 'react';
import { Text, Pressable, Image, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#141e30', '#243b55']} style={styles.linearGradient}>
        <View style={styles.contentContainer}>
          <Image 
            source={require('../assets/favicon.png')} 
            style={styles.image}
          />
          <Text style={styles.titleText}>Keep all your client conversations in one place</Text>
          <Text style={styles.baseText}>At legal call we allow you to contact your clients through voice and text without giving out your phone number</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Sign Up')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 20
  },
  contentContainer: {
    margin: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Adjust the gap between elements as needed
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center'
  },
  titleText: {
    color: 'blue', // Replace with your desired color
    fontSize: 24, // Equivalent to 2xl
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 24,
  },
  baseText: {
    color: 'white', // Replace with your desired color
    fontSize: 16, // Equivalent to base
    textAlign: 'center',
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: 'blue', // Replace with your desired color
    borderRadius: 30, // Equivalent to rounded-3xl
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
    
export default WelcomeScreen;