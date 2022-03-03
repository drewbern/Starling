import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  PermissionsAndroid,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import styles from './MainScreenStyles';
import BleManager from '../../BleManager';
import * as Animatable from 'react-native-animatable';


const MainScreen = ({ navigation }) => {
  const peripherals = new Map();
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    BleManager.start({ showAlert: false });
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
        if (result) {
          console.log("Permission is OK");
        } else {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
            if (result) {
              console.log("User accept");
            } else {
              console.log("User refuse");
            }
          });
        }
      });
    }
  }, []);

  const handleConnect = () => {
    BleManager.getConnectedPeripherals([]).then((results) => {
      if (results.length == 0) {
        console.log('No connected peripherals')
      } else if (results.length == 1) {
        BleManager.connect("58:BF:25:32:C6:56")
          .then(() => {
            // Success code
            console.log("Connected");
          })
          .catch((error) => {
            // Failure code
            console.log(error);
          });
      }
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];
        peripheral.connected = true;
        peripherals.set(peripheral.id, peripheral);
        setList(Array.from(peripherals.values()));
        navigation.navigate("NameScreen", { name: results[0].name })
      }
    });
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content" />
        <View style={{ alignItems: 'center' }}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome to your UrinDx!</Text>
        </View>

        {isLoading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator color={'#9461AC'} size={25} />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => handleConnect()}
              style={styles.button}>
              <Text style={styles.buttonText}>Click here to connect to your device</Text>
            </TouchableOpacity>
          </View>
        )}

        {(list.length == 0 && !isLoading) &&
          <View style={{ margin: 40 }}>
            <Text style={{ textAlign: 'center' }}>Please Connect Your Device with Blutooth</Text>
          </View>
        }
      </View>

      <View>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          resizeMode="contain"
        />
      </View>
    </>
  );
};

export default MainScreen;
