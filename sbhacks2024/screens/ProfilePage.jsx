import React from 'react';
import { Modal,View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const auth = getAuth();

const ProfilePage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <ImageBackground
            source={require("sbhacks2024/assets/homebackground.jpeg")}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.middleText}>Profile</Text>
                <Image
                    source={{ uri: 'https://placekitten.com/200/200' }}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>Angel Shih</Text>
                <Text style={styles.bio}>angelshih7@gmail.com</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.ButtonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingButton}>
                <Text style={styles.ButtonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => setModalVisible(true)} style={styles.logoutButton}>
                <Text style={styles.ButtonText}>Logout</Text>
            </TouchableOpacity>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.modalOverlay}
                >
                <View style={styles.modalView}>
                    <LinearGradient colors={["#6c636b", "#6c636b"]} style={styles.linearGradient}>
                    <TouchableOpacity onPress={() => signOut(auth)} style={styles.rectangularButton}>
                        <Feather name="log-out" color="white" size={24} />
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                    </LinearGradient>
                </View>
                </TouchableOpacity>
            </Modal>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', // Change justifyContent to 'flex-start'
        paddingTop: 100, // Add paddingTop to create space at the top
    },
    middleText: {
        fontSize: 25,
        marginBottom: 30,
        fontFamily: 'marcellus',
        color: '#261e29'
    },
    recent: {
        fontSize: 20,
        marginBottom: 30,
        fontFamily: 'marcellus',
        color: '#261e29'
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'marcellus',
        color: '#261e29'
    },
    bio: {
        fontSize: 20,
        color: '#555',
        fontFamily: 'marcellus',
        color: '#261e29'
    },
    buttonContainer: {
        marginTop: 20,
    },
    editButton: {
        backgroundColor: '#6c636b',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
        marginVertical: 10,
        padding: 10,
        marginBottom: 100, 
        marginLeft: 125, 
        marginTop: 40,
    },
    settingButton: {
        backgroundColor: '#6c636b',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        marginVertical: 10,
        padding: 10,
        marginBottom: 100, 
        marginLeft: 135, 
        marginTop: -80,
    },
    logoutButton: {
        backgroundColor: '#6c636b',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        marginVertical: 10,
        padding: 10,
        marginBottom: 170,
        marginLeft: 135,  
        marginTop: -80,
    },
    ButtonText: {
        color: '#e7dee9',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'marcellus',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalView: {
        height: '20%',
        marginTop: 'auto',
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 15,
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
        borderRadius: 10,
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
});

export default ProfilePage;