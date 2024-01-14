import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { getFirestore, collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

const fetchRecentJournals = async () => {
  const user = auth.currentUser;
  if (!user) return [];

  const journalsRef = collection(db, "users", user.uid, "journals");
  const q = query(journalsRef, orderBy("createdAt", "desc"), limit(3));

  try {
    const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, ' => ', doc.data());
    //   });
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching journals: ", error);
    return [];
  }
};

const HomeScreen = ({ navigation }) => {
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        const loadJournals = async () => {
            const recentJournals = await fetchRecentJournals();
            setJournals(recentJournals);
        };

        loadJournals();
    }, []);

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
                    <Text style={styles.dateText}>SUN, JAN 14</Text>    
                    <Text style={styles.welcomeText}>Welcome to Your</Text>
                    <Text style={styles.memoriText}>Memori</Text>
                    <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('SelectTopic')}>
                        <Image
                            source={require("sbhacks2024/assets/logo.png")}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.rectangularButton} 
                        onPress={() => navigation.navigate('PreviousScreen')}
                    >
                        <Text style={styles.buttonText}>View Past Journals</Text>
                    </TouchableOpacity>
                    <Text style={styles.recentText}>Recent Entries</Text>

                {journals.map((journal, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.recent} 
                        onPress={() => onCardPress(journal.id)}
                    >
                        <Text style={styles.cardText}>{journal.topic}     {journal.createdAt.toDate().toLocaleDateString()}</Text>
                        {/* Display a preview of the journal entry */}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
  </ImageBackground>

    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // You can also use 'contain' or 'stretch'
        justifyContent: 'center', // Optional: Adjust this based on your layout
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
        width: 510, 
        height: 510, 
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
    },
    recent: {
        width: 300,  
        height: 100, 
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
    },
});
