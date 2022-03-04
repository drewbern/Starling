
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    Text,
    View
} from 'react-native';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AuthService from '../../Services/API/AuthService';
import styles from './BathroomRoutineScreenStyles';
import BleManager from '../../BleManager';
import * as constant from '../../Utils/Constant';
import { stringToBytes } from "convert-string";
var Buffer = require('buffer/')
let data = stringToBytes("X1234");

const BathroomRoutineScreen = ({ navigation, route }) => {
    const [isShowFirst, setIsFirstShow] = useState(false)
    const [isShowSecond, setIsSecondShow] = useState(false)
    const [isShowThird, setIsThirdShow] = useState(false)
    const [isShowFirstImg, setIsFirstShowImg] = useState(false)
    const [isShowSecondImg, setIsSecondShowImg] = useState(false)
    const [isShowThirdImg, setIsThirdShowImg] = useState(false)
    const { id } = route.params;
    let synccData;

    useEffect(() => {
        async function fetchData() {
            await retriveServices();
            setTimeout(async () => {
                await handshake();
            }, 2000);
            setTimeout(async () => {
                await handleStartAndSync();
            }, 4000);
            setTimeout(async () => {
                await handleRead();
            }, 6000);
            setTimeout(async () => {
                await syncData();
            }, 8000);
        }
        fetchData();
    }, [])

    const retriveServices = async () => {
        await BleManager.retrieveServices(id).then(
            (peripheralInfo) => {
                console.log("Peripheral info:", peripheralInfo);
            }
        );
    }

    const handshake = async () => {
        await BleManager.write(
            id,
            constant.SERVICE_UUID_UART,
            constant.CHARACTERISTIC_UUID_RX,
            data
        )
            .then(() => {
                setIsFirstShow(true)
                setIsFirstShowImg(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleStartAndSync = async () => {
        data = stringToBytes("TEST");
        await BleManager.write(
            id,
            constant.SERVICE_UUID_UART,
            constant.CHARACTERISTIC_UUID_RX,
            data
        )
            .then(() => {
                console.log("Write: " + data);
            })
            .catch((error) => {
                console.log(error);
            });
        data = stringToBytes("SYNCC");
        await BleManager.write(
            id,
            constant.SERVICE_UUID_UART,
            constant.CHARACTERISTIC_UUID_RX,
            data
        )
            .then(() => {
                setIsSecondShow(true)
                setIsFirstShowImg(false)
                setIsSecondShowImg(true)
                setIsThirdShowImg(false)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleRead = async () => {
        await BleManager.read(
            id,
            constant.SERVICE_UUID_SENSOR,
            constant.CHARACTERISTIC_UUID_RGBIR
        )
            .then((readData) => {
                console.log("Read: " + readData);
                const ar8 = new Uint8Array(readData);
                const buf = new Buffer.Buffer(readData);
                const ar16 = new Uint16Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint16Array.BYTES_PER_ELEMENT);
                for (var i = 0, v; i < ar16.length; i++) {
                    v = ar16[i];
                    ar16[i] = ((v & 0xff) << 8) | ((v & 0xff00) >>> 8);  // mask and shift the two bytes
                }
                console.log(ar16);
                synccData = {
                    RGB_RED: ar16[1],
                    RGB_GREEN: ar16[2],
                    RGB_BLUE: ar16[3],
                    RGB_IR: ar16[4]
                }
            })
            .catch((error) => {
                console.log(error);
            });
        await BleManager.read(
            id,
            constant.SERVICE_UUID_SENSOR,
            constant.CHARACTERISTIC_UUID_UV
        )
            .then((readData) => {
                console.log("Read: " + readData);
                const ar8 = new Uint8Array(readData);
                const buf = new Buffer.Buffer(readData);
                const ar16 = new Uint16Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint16Array.BYTES_PER_ELEMENT);
                for (var i = 0, v; i < ar16.length; i++) {
                    v = ar16[i];
                    ar16[i] = ((v & 0xff) << 8) | ((v & 0xff00) >>> 8);  // mask and shift the two bytes
                }
                console.log(ar16);
                synccData.RGB_UVA = ar16[1]
                setIsThirdShow(true)
                setIsFirstShowImg(false)
                setIsSecondShowImg(false)
                setIsThirdShowImg(true)

            })
            .catch((error) => {
                console.log(error);
            });
    }

    const syncData = async () => {
        Alert.alert("Alert Title", "Data from bluethooth RED >>" + synccData.RGB_RED + "  GREEN >>" + synccData.RGB_GREEN + "  BLUE >>" + synccData.RGB_BLUE + "  RGB IR >>" + synccData.RGB_IR + "  RGB UVA >>" + synccData.RGB_UVA)
        // await AuthService.syncAnalysis(synccData.RGB_RED, synccData.RGB_GREEN, synccData.RGB_BLUE, synccData.RGB_IR, synccData.RGB_UVA)
        //     .then((response) => {
        //         console.log(response)
        //         if (response.message) {
        //             console.log(response.message)
        //         } else {
        //             navigation.navigate("SuccessScreen")
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    return (
        <>
            <View style={styles.container}>
                <AppHeader
                    navigation={navigation}
                    isBack={true}
                />
                {!isShowFirstImg && !isShowSecondImg && !isShowThirdImg &&
                    <>
                        <View style={styles.MessageContainer}>
                            <Text style={styles.successMessage}>One moment please while we cailbrate UrinDx</Text>
                        </View>
                    </>
                }
                {isShowFirst &&
                    <View style={styles.mainView}>
                        <View style={styles.secondView}>
                            <Image
                                style={styles.readyImg}
                                source={require('../../../assets/ready.png')}
                            />
                            <Image
                                style={styles.verticalImg}
                                source={require('../../../assets/vertical-dots.png')}
                            />
                            <Text style={styles.imgText}>UrinDx Ready</Text>
                        </View>
                        <Image
                            source={require('../../../assets/right.png')}
                        />
                    </View>
                }
                {isShowSecond &&
                    <View style={styles.mainView}>
                        <View style={styles.secondView}>
                            <Image
                                source={require('../../../assets/sample.png')}
                            />
                            <Image
                                style={styles.verticalImg}
                                source={require('../../../assets/vertical-dots.png')}
                            />
                            <Text style={styles.imgText}>Fresh sample is being{'\n'}processed</Text>
                        </View>
                        <Image
                            source={require('../../../assets/right.png')}
                        />
                    </View>
                }
                {isShowThird &&
                    <View style={styles.mainView}>
                        <View style={styles.secondView}>
                            <Image
                                source={require('../../../assets/sampleData.png')}
                            />
                            <Text style={styles.imgText}>Syncing fresh sample{"\n"}data</Text>
                        </View>
                        <Image
                            source={require('../../../assets/horizontal-dots.png')}
                        />
                    </View>}

                {!isShowFirstImg && !isShowSecondImg && !isShowThirdImg && <Image
                    source={require('../../../assets/logo-success1.png')}
                    style={styles.footerImg}
                />}

                {isShowFirstImg && <Image
                    source={require('../../../assets/logo-success2.png')}
                    style={styles.footerImg}
                />}
                {isShowSecondImg && <Image
                    source={require('../../../assets/logo-success3.png')}
                    style={styles.footerImg}
                />}
                {isShowThirdImg && <Image
                    source={require('../../../assets/logo-success4.png')}
                    style={styles.footerImg}
                />}
            </View>
        </>
    );
};


export default BathroomRoutineScreen;
