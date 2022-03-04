import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './NameScreenStyles'

const NameScreen = ({ navigation, route }) => {

    const { name, id } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>You have successfully paired to your device!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
                <View style={styles.fadeInAction}>
                    <Text style={styles.textInput}>{name}</Text>
                    {/* <TextInput
                        placeholder="Name"
                        placeholderTextColor="black"
                        style={styles.textInput}
                        autoCapitalize="none"
                    /> */}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("WelcomeScreen", { id: id })}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </ScrollView>
    );
};

export default NameScreen;
