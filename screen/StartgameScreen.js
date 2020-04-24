import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card'
import colors from '../constants/colors';

const StartgameScreen = () => {
    return (
        <View style={styles.sreen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={styles.Inputcontainner}>
                <Text>Select a number</Text>
                <TextInput/>
                <View style={styles.buttoncontainner}>
                    <View style={styles.button}><Button title="Conferm" color={colors.accent}/></View>
                    <View style={styles.button}><Button title="Reset" color={colors.primary}/></View>
                </View>
            </Card>
        </View>
    );
}; 

const styles = StyleSheet.create({
    sreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttoncontainner: {
        flexDirection: 'row',
        width: '100%', 
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    Inputcontainner :{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    button: {
        width: '40%'
    },
});
export default StartgameScreen
