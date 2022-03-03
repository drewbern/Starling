import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default class RadioButton extends Component {
    state = {
        value: null,
    };
    render() {
        const { PROP } = this.props;
        const { value } = this.state;
        return (
            <View>
                {PROP.map(res => {
                    return (
                        <View key={res.key} style={styles.container}>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.setState({
                                        value: res.key,
                                    });
                                }}>
                                {value === res.key && <View style={styles.selectedRb} />}
                            </TouchableOpacity>
                            <Text style={styles.radioText}>{res.text}</Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    radioText: {
        marginLeft: 15,
        fontSize: 17,
        color: '#9461AC',
        fontWeight: '400',
        marginBottom: 8
    },
    radioCircle: {
        height: 25,
        width: 25,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#9461AC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#9461AC',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});