import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';


const ProfilePage = () => {
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
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.ButtonText}>Logout</Text>
            </TouchableOpacity>
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
});

export default ProfilePage;
