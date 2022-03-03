import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './WelcomeScreenStyles';



const WelcomeScreen = ({ navigation }) => {
    const handleStart = async () => {
     navigation.navigate("BathroomRoutineScreen")
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/welcome-logo.png')}
                style={styles.logoImg}
            />
            <View>
                <Text style={styles.titleText}>Welcome Teri!</Text>
            </View>
            <View>
                <Text style={styles.paragraphText}>Remember that with Strling. when it{"\n"}comes to your bladder UrinControl </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => handleStart()}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Turn on UrinDx</Text>
                </TouchableOpacity>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
            </Animatable.View>
        </View>
    );
};

export default WelcomeScreen;