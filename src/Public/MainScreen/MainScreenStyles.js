import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    container: {
        backgroundColor: "white",
        height: hp("100%"),
        alignItems: "center"
    },

    welcomeText: {
        color: "#000",
        fontSize: wp('6%'),
        marginTop: hp('50%'),
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
    scrollView: {
        backgroundColor: "lighter",
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: "white",
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: "black",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: "dark",
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: "dark",
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
};
