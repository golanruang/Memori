import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native-gesture-handler";
import { getFirestore, collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString(undefined, options);
};

const fetchJournalsByTopic  = async (selectedTopic) => {
  const user = auth.currentUser;
  if (!user) return [];

  const journalsRef = collection(db, "users", user.uid, "journals");
  const q = query(journalsRef, where("topic", "==", selectedTopic), orderBy("createdAt", "desc"));

  try {
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching journals: ", error);
    return [];
  }
};

const PreviousScreen = ({ navigation }) => {
  const [selectedTopic, setSelectedTopic] = useState("Select");
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const loadJournals = async () => {
        const recentJournals = await fetchJournalsByTopic(selectedTopic);
        setJournals(recentJournals);
    };

    loadJournals();
}, [selectedTopic]);

  const onCardPress = (journalId) => {
      navigation.navigate('JournalDetailScreen', { journalId });
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
            selectedValue={selectedTopic}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedTopic(itemValue)
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
            
            {selectedTopic=== "Select" ? (<Text style={styles.recentText}>Select a topic</Text>) : 
            (<Text style={styles.recentText}>All entries in {selectedTopic}</Text>)}

                {journals.map((journal, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.recent} 
                        onPress={() => onCardPress(journal.id)}
                    >
                        <Text style={styles.cardText}>
                                {formatDate(journal.createdAt.toDate())}
                                {'\n'} 
                                {journal.topic}
                        </Text>
                    </TouchableOpacity>
                ))}
        </View>
        </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
  },
  scrollView: {
    flex: 1,
  },
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
    marginBottom: 70,
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
  recentText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    fontFamily: 'marcellus',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'marcellus',
    color: '#e7dee9',
    textAlign: 'center'
  },
  recent: {
    width: 290,  
    height: 80, 
    backgroundColor: '#6c636b', 
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 8, 
  },
});

export default PreviousScreen;
