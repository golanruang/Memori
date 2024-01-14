import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
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

const DisplayByTopic = ({ route, navigation }) => {
    const {selectedTopic}  = route.params;
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
            source={require("sbhacks2024/assets/homebackground.jpeg")} 
            style={styles.backgroundImage}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.recentText}>All entries in {selectedTopic}</Text>

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

export default DisplayByTopic;

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
    },
    dateText: {
        marginTop: 50,
        fontSize: 20,
        marginBottom: 10,
        fontFamily: 'marcellus',
    },
    welcomeText: {
        fontSize: 38,
        fontFamily: 'marcellus',
        textAlign: 'center'
    },
    memoriText: {
        fontSize: 46,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'marcellus',
        textAlign: 'center'
    },
    circleButton: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#6c636b', 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    rectangularButton: {
        backgroundColor: '#6c636b', 
        paddingHorizontal: 30, 
        paddingVertical: 10, 
        borderRadius: 5, 
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%', 
        marginBottom: 20, 
        marginTop: 40,
    },

    buttonImage: {
        marginTop: 16,
        marginLeft: 1,
        width: 450, 
        height: 450, 
    },
    recentText: {
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 12,
        fontFamily: 'marcellus',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'marcellus',
        textAlign: 'center',
        color: '#e7dee9'
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
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'marcellus',
        color: '#e7dee9',
        textAlign: 'center'
    },
});
