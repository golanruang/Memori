import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

const LoadScreen = ( {navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Loading Screen</Text>
            <Button
                title="Keep loading...again"
                onPress={() => navigation.navigate('Load')}
                // onPress={() => navigation.push('Details')}
                // push adds new route onto the navigation stack
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>   
      );
}

export default LoadScreen;