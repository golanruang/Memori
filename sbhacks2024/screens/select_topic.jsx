import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import BottomMenu from '../bottomMenu';


const SelectTopic = ({ navigation }) => {
    const handlePress = (topic) => {
        navigation.navigate('QuestionPrompt', { selectedTopic: topic });
    };
    return (
      <ImageBackground
        source={require("sbhacks2024/assets/homebackground.jpeg")} // Specify the path to your background image
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.title}>What's on your mind today?</Text>

            <TouchableOpacity
              style={styles.card}
              onPress={() => handlePress("Adolescence")}
            >
              <View style={styles.cardContent}>
                <MaterialCommunityIcon
                  name="car-child-seat"
                  size={30}
                  color="#e7dee9"
                />
                <Text style={styles.cardText}>Adolescence</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => handlePress("Relationships")}
            >
              <View style={styles.cardContent}>
              <MaterialCommunityIcon
                  name="heart"
                  size={30}
                  color="#e7dee9"
                />
                <Text style={styles.cardText}>Relationships</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => handlePress("Hobbies")}
            >
              <View style={styles.cardContent}>
                <FontAwesome5 name="chess-knight" size={30} color="#e7dee9" />
                <Text style={styles.cardText}>Hobbies</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => handlePress("Achievements")}
            >
              <View style={styles.cardContent}>
                <FontAwesome5
                  name="trophy"
                  size={26}
                  color="#e7dee9"
                  style={styles.iconStyle}
                />
                <Text style={styles.cardText}>Achievements</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => handlePress("Wisdom")}
            >
              <View style={styles.cardContent}>
                <MaterialCommunityIcon
                  name="lightbulb-on"
                  size={30}
                  color="#e7dee9"
                  style={styles.iconStyle}
                />
                <Text style={styles.cardText}>Wisdom</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => handlePress("Recent Life")}
            >
              <View style={styles.cardContent}>
                <MaterialCommunityIcon
                  name="clock"
                  size={30}
                  color="#e7dee9"
                  style={styles.iconStyle}
                />
                <Text style={styles.cardText}>Recent Life</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 60,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
        fontFamily: 'marcellus',
    },
    card: {
        width: 270,  
        height: 100, 
        backgroundColor: '#6c636b', 
        marginBottom: 20,
        justifyContent: 'center',
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 8, 
    },
    cardContent: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 27, 
    },
    cardText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 15, 
        fontFamily: 'marcellus',
        color: "#e7dee9"
    },
});

export default SelectTopic;