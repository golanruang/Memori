import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

const JournalDetailScreen = ({ route }) => {
  const { journalId } = route.params;
  const [journal, setJournal] = useState(null);

  useEffect(() => {
    const fetchJournal = async () => {
      if (!journalId) return;

      try {
        const user = auth.currentUser;
        const journalRef = doc(db, 'users', user.uid, 'journals', journalId);
        const docSnap = await getDoc(journalRef);

        if (docSnap.exists()) {
          setJournal(docSnap.data());
        } else {
          console.log('No such journal!');
        }
      } catch (error) {
        console.error('Error fetching journal: ', error);
      } 
    };

    fetchJournal();
  }, [journalId]);


  if (!journal) {
    return (
      <View style={styles.container}>
        <Text>No Journal Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{journal.topic}</Text>
      <Text style={styles.content}>{journal.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
  },
  // Add additional styles as needed
});

export default JournalDetailScreen;
