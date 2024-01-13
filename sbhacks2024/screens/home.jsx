import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.dateText}>January 13th, 2024</Text>    
                <Text style={styles.welcomeText}>Welcome to Your Memori</Text>
                <TouchableOpacity style={styles.circleButton} onPress={() => console.log('Circle Button Pressed')}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5' }}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.rectangularButton} 
                    onPress={() => console.log('button pressed')}
                    >
                    <Text style={styles.buttonText}>View Past Journals</Text>
                </TouchableOpacity>
                <Text style={styles.recentText}>Recent Entries</Text>

                <TouchableOpacity style={styles.recent} onPress={() => onCardPress(1)}>
                    <Text style={styles.cardText}>Card 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recent} onPress={() => onCardPress(1)}>
                    <Text style={styles.cardText}>Card 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recent} onPress={() => onCardPress(1)}>
                    <Text style={styles.cardText}>Card 3</Text>
                </TouchableOpacity>
                <Button
                    title="Go to SelectTopic"
                    onPress={() => navigation.navigate('SelectTopic')}
                />
            </View>
        </ScrollView>
    );
};

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
        backgroundColor: 'tan', // Change button color if needed
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    rectangularButton: {
        backgroundColor: 'tan', // Background color of the button
        paddingHorizontal: 30, // Horizontal padding for wider button
        paddingVertical: 10, // Vertical padding for button height
        borderRadius: 5, // Rounded corners
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center', // Center text vertically
        width: '50%', // Use a percentage of screen width for button width
        marginBottom: 20, // Space below the button
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
        width: 300,  // Adjust width as needed
        height: 100, // Adjust height as needed
        backgroundColor: '#f0f0f0', // Card background color
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 8, // Rounded corners
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
