import React, { useEffect, useState } from 'react';
import { Share,View, Text, StyleSheet,Button, ActivityIndicator  } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

const JournalDetailScreen = ({ route }) => {
  const { journalId } = route.params;
  const [journal, setJournal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchJournal = async () => {
      if (!journalId) {
        setIsLoading(false);
        return;
      }
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
      } finally {
        setIsLoading(false)
      }
    };
    fetchJournal();
  }, [journalId]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Journal Entry: ${journal.topic}\n${journal.firstOutput.content}\n${journal.firstJournal}\n${journal.secondOutput.content}\n${journal.secondJournal}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Journal shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };
  if (isLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  // Check if the journal data is available
  if (!journal) {
    return <View style={styles.container}><Text>No Journal Found</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{journal.topic}</Text>
      <Text style={styles.content}>{formatDate(journal.createdAt.toDate())}</Text>
      <Text style={styles.content}>{journal.firstOutput.content}</Text>
      <Text style={styles.content}>{journal.firstJournal}</Text>
      <Text style={styles.content}>{journal.secondOutput.content}</Text>
      <Text style={styles.content}>{journal.secondJournal}</Text>
      <Button onPress={onShare} title="Share Journal" />
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
