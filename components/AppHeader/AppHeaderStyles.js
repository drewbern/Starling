import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    backgroundImage: {
        color: "white"
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
        marginTop: hp('7%'),
    },
    backbuttonText: {
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
        color: 'black'
    },
    headerColor: {
        backgroundColor: "#9461AC",
        height: hp('20%'),
        flexDirection: "row",
        paddingLeft: wp("3%")
    },
    headerText: {
        color: "white",
        marginTop: hp("5%"),
        fontSize: hp("4%"),
        paddingLeft: wp("12%"),
    }
}