import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        backgroundColor: "white",
        height: hp("100%"),
    },

    title: {
        flex: 1,
    },

    titleText: {
        color: "black",
        marginTop: hp('25%'),
        fontSize: hp('2.5%'),
        textAlign: "center"
    },

    fadeInUpBig: {
        flex: 3,
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('18.5%'),
    },

    fadeInAction: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },

    textInput: {
        flex: 1,
        paddingLeft: wp('2.5%'),
        color: 'black',
        fontSize: hp('2.45%'),
        textAlign: "center"
    },

    buttonContainer: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-around'
    },

    button: {
        width: wp('55%'),
        marginTop: hp('25%'),
        padding: wp('3%'),
        borderWidth: 1,
        borderColor: '#9461AC',
        borderRadius: 10,
    },

    buttonText: {
        color: '#9461AC',
        textAlign: 'center'
    },

};
