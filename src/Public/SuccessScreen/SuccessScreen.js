
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import RadioButton from '../../../components/RadioButton';
import styles from './SuccessScreenStyles';


const SuccessScreen = ({navigation}) => {
    const [isShow, setIsShow] = useState(false)

    const handleEnterSymptoms = () => {
        setIsShow(true)
    }
    const handleBack = () => {
        setIsShow(false)
    }

    const PROP = [
        {
            key: 'option1',
            text: 'Option1',
        },
        {
            key: 'option2',
            text: 'Option1',
        },
        {
            key: 'option3',
            text: 'Option3',
        },
        {
            key: 'option4',
            text: 'Option4',
        },
    ];

    return (
        <>
            {!isShow && <View style={styles.container}>
                <Image
                    source={require('../../../assets/success.png')}
                    style={styles.images}
                />
                <Text style={styles.title}>Congratulations!!!</Text>
                <View style={styles.MessageContainer}>
                    <Text style={styles.successMessage}>Your sample was successfully recorded. Don't forget to flush</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("WelcomeScreen")}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Return Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleEnterSymptoms()}>
                        <Text style={styles.buttonText}>Enter Symptoms</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={require('../../../assets/success-logo.png')}
                    style={styles.logoImg}
                />
            </View>}

            {isShow && <ScrollView>
                <TouchableOpacity
                    onPress={() => handleBack()}
                    style={styles.backbutton}>
                    <Text style={styles.backbuttonText}>&lt; Go back</Text>
                </TouchableOpacity>
                <View style={styles.subContainer}>
                    <Text style={styles.question}>Any additional symptoms you would like to record with sample:</Text>
                    <RadioButton PROP={PROP}></RadioButton>
                    <Text style={styles.comments}>Comments</Text>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="grey"
                            numberOfLines={1}
                            multiline={true}
                        />
                    </View>
                    <View style={styles.submitbtn}>
                        <TouchableOpacity>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>}


        </>
    );
};


export default SuccessScreen;
