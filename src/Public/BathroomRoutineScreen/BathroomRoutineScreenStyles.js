import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        backgroundColor: "white",
        height: hp("100%")
    },

    MessageContainer: {
        textAlign: 'center',
        maxWidth: '100%',
        paddingHorizontal: hp('2%'),
        marginTop: hp("20%")
    },

    successMessage: {
        textAlign: 'center',
        paddingHorizontal: hp('8%'),
        fontSize: hp('2.5%'),
        fontWeight: "400",
        color: 'black',
        paddingTop: hp('1.8%')
    },

    mainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 25,
        alignItems: "center",
        zIndex: 1
    },

    secondView: {
        flexDirection: "row",
        alignItems: "center"
    },

    imgText: {
        marginLeft: wp("4%"),
        color: "black"
    },

    footerImg: {
        width: wp('85%'),
        height: hp('55%'),
        position: "absolute",
        bottom: hp("-6%"),
    },
    verticalImg: {
        position: "absolute",
        top: hp("10%"),
        left: wp("8%")
    },
    toastStyle: {
        top: hp('4%')
    }
};