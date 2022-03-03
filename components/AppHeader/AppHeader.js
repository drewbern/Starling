import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';
import styles from './AppHeaderStyles';

const AppHeader = ({ navigation, isBack }) => {

    return (
        <>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.headerColor}>
                {isBack &&
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backbutton}>
                        <Text style={styles.backbuttonText}>&lt; Go back</Text>
                    </TouchableOpacity>}
                <Text style={styles.headerText}>Bathroom{"\n"}Routine</Text>
            </View>
        </>
    )
}

export default AppHeader;
