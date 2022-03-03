import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        backgroundColor: "white",
    },

    title: {
        textAlign: 'center',
        fontSize: hp('4%'),
        fontWeight: 'bold',
        color: 'black'
    },

    MessageContainer: {
        textAlign: 'center',
        maxWidth: '100%',
        paddingHorizontal: hp('4%')
    },
    successMessage: {
        textAlign: 'center',
        paddingHorizontal: hp('4%'),
        fontSize: hp('2%'),
        fontWeight: "400",
        color: 'black',
        paddingTop: hp('1.8%')
    },
    buttonContainer: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-around'
    },
    button: {
        width: wp('40%'),
        marginTop: hp('2%'),
        padding: hp('1.8%'),
        borderWidth: 1,
        borderColor: '#9461AC',
        borderRadius: 10,
    },
    buttonText: {
        color: '#9461AC',
        textAlign: 'center'
    },
    images: {
        width: wp('100%'),
        height: hp('45%')
    },
    logoImg: {
        width: wp('100%'),
        height: hp('35%')
    },
    subContainer: {
        paddingLeft: wp('8%'),
        paddingRight: wp('10%')
    },
    backbutton: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
        height: hp('4.5%'),
        width: wp('25%'),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 30,
        marginTop: hp('1%')
    },
    backbuttonText: {
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
        color: 'black'
    },
    submitButtonText: {
        fontSize: hp('2%'),
        color: '#9461AC',
        textAlign: 'center'
    },
    question: {
        flexDirection: 'row',
        textAlign: 'center',
        maxWidth: '100%',
        fontSize: hp('2.2%'),
        color: 'black',
        marginTop: hp('9.5%'),
        marginBottom: hp('8%'),
        lineHeight: hp('4%')
    },
    textAreaContainer: {
        borderColor: '#9461AC',
        borderWidth: 1,
        borderRadius: 10
    },
    textArea: {
        height: hp('22%'),
    },
    comments: {
        marginTop: hp('2.2%'),
        marginBottom: hp('1.2%'),
        fontSize: hp('2%'),
        color: '#9461AC'
    },
    submitbtn: {
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
        marginTop: hp('6%'),
        padding: hp('2%'),
        borderWidth: 1,
        borderColor: '#9461AC',
        borderRadius: 10,
        textAlign: 'center',
        margin: 'auto',
        justifyContent: 'center',
        display: 'flex'
    },
};