import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
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
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.dateText}>January 13th, 2024</Text>    
                <Text style={styles.welcomeText}>Welcome to Your Memori</Text>
                <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('SelectTopic')}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5' }}
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
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        marginTop: 50,
        fontSize: 18,
        marginBottom: 12,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    circleButton: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'tan', 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    rectangularButton: {
        backgroundColor: 'tan', 
        paddingHorizontal: 30, 
        paddingVertical: 10, 
        borderRadius: 5, 
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%', 
        marginBottom: 20, 
    },

    buttonImage: {
        width: 100, 
        height: 100, 
        resizeMode: 'contain',
    },
    recentText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    recent: {
        width: 300,  
        height: 100, 
        backgroundColor: '#f0f0f0', 
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
        fontSize: 18,
        fontWeight: 'bold',
    },
});


