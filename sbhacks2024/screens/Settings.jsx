import React from 'react';
import { Modal, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { getAuth, signOut } from 'firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';

const auth = getAuth();

function Settings({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.circleButton}>
        <Feather name="menu" color="white" size={24} />
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.modalOverlay}
        >
          <View style={styles.modalView}>
            <LinearGradient colors={["#141e30", "#243b55"]} style={styles.linearGradient}>
              <TouchableOpacity onPress={() => signOut(auth)} style={styles.rectangularButton}>
                <Feather name="log-out" color="white" size={24} />
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'tan',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    height: '30%',
    marginTop: 'auto',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  rectangularButton: {
    backgroundColor: 'tan',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20,
    },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    },
});

export default Settings;
