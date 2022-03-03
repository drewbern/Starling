import React, { useEffect } from 'react';
import {
    View,
    StatusBar,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './SplashScreenStyles';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(async () => {
        navigation.navigate('MainScreen')
        });
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500" 
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

export default SplashScreen;