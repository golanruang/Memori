import React, { useEffect, useState, ImageBackground } from "react";
import { Share, View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

const db = getFirestore();
const auth = getAuth();

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
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
        const journalRef = doc(db, "users", user.uid, "journals", journalId);
        const docSnap = await getDoc(journalRef);

        if (docSnap.exists()) {
          setJournal(docSnap.data());
        } else {
          console.log("No such journal!");
        }
      } catch (error) {
        console.error("Error fetching journal: ", error);
      } finally {
        setIsLoading(false);
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
          console.log("Shared with activity type:", result.activityType);
        } else {
          console.log("Journal shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };
  if (isLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  // Check if the journal data is available
  if (!journal) {
    return (
      <View style={styles.container}>
        <Text>No Journal Found</Text>
      </View>
    );
  }

  const backgroundImage = require("sbhacks2024/assets/homebackground.jpeg"); // Replace with the actual path

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{journal.topic}</Text>
        <Text style={styles.date}>
          {formatDate(journal.createdAt.toDate())}
        </Text>
        <Text style={styles.prompt}>Prompt: </Text>
        <Text style={styles.content}>
          {journal.firstOutput.content}
          {"\n"}
        </Text>
        <Text style={styles.prompt}>Response:</Text>
        <Text style={styles.content}>
          {journal.firstJournal}
          {"\n"}
        </Text>
        <Text style={styles.prompt}>Prompt:</Text>
        <Text style={styles.content}>
          {journal.secondOutput.content}
          {"\n"}
        </Text>
        <Text style={styles.prompt}>Response:</Text>
        <Text style={styles.content}>
          {journal.secondJournal}
          {"\n"}
        </Text>
        <TouchableOpacity onPress={onShare} style={styles.button}>
          <Text style={styles.buttonText}>Share Journal</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bfb3ce",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "marcellus",
  },
  date: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "marcellus",
  },
  content: {
    fontSize: 18,
    fontFamily: "marcellus",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  prompt: {
    fontSize: 24,
    fontFamily: "marcellus",
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#261e29",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "marcellus",
  },
});

export default JournalDetailScreen;
