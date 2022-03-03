import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        backgroundColor: "white",
        height: hp("100%")
    },

    titleText: {
        color: "black",
        marginTop: hp('5%'),
        fontSize: hp('4%'),
        fontWeight: "bold",
        paddingLeft: wp('8%'),
    },
    paragraphText: {
        fontFamily:"Open Sans",
        color: "black",
        marginTop: hp('3%'),
        fontSize: hp('2.5%'),
        textAlign: "center",
        paddingRight: wp("1%")
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

    buttonContainer: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-around'
    },

    button: {
        width: wp('85%'),
        marginTop: hp('8%'),
        backgroundColor: '#9461AC',
        borderRadius: 10,
        height: wp('13%'),

    },

    buttonText: {
        fontFamily:"Open Sans",
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginTop: hp('1.3%')
    },

    logoImg: {
        width: wp('85%'),
        height: hp('55%'),
        marginTop: hp('0%'),
    },
};
