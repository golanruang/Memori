import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomMenu from '../bottomMenu';


const SelectTopic = ({ navigation }) => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>What would you like to talk about today?</Text>
                
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('QuestionPrompt')}>
                    <View style={styles.cardContent}>
                        <MaterialCommunityIcon name="car-child-seat" size={30} color="#000"/>
                        <Text style={styles.cardText}>Youth</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('QuestionPrompt')}>
                    <View style={styles.cardContent}>
                        <MaterialIcon name="emoji-emotions" size={30} color="#000" />
                        <Text style={styles.cardText}>Second</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('QuestionPrompt')}>
                    <View style={styles.cardContent}>
                        <MaterialIcon name="face" size={30} color="#000" />
                        <Text style={styles.cardText}>Third</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('QuestionPrompt')}>
                    <View style={styles.cardContent}>
                        <MaterialIcon name="grade" size={30} color="#000" style={styles.iconStyle} />
                        <Text style={styles.cardText}>Fourth</Text>
                    </View>
                </TouchableOpacity>

                <Button
                    title="Go to QuestionPrompt"
                    onPress={() => navigation.navigate('QuestionPrompt')}
                />
            </View>   
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 60,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
    },
    card: {
        width: 250,  
        height: 100, 
        backgroundColor: '#f0f0f0', 
        marginBottom: 20,
        justifyContent: 'center',
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 8, 
    },
    cardContent: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 45, 
    },
    cardText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20, 
    },
});

export default SelectTopic;