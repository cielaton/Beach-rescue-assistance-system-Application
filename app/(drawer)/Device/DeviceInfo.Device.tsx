import {StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";
import {BatteryFull} from "lucide-react-native";

const DeviceInfoSection = ({info, value}: { info: string, value: string }) => {
    return <View>
        <Text style={styles.deviceInfo}>{info}</Text>
        <Text style={styles.deviceInfoValue}>{value}</Text>
    </View>
}

const DeviceInfo = () => {
    return <View style={styles.container}>
        <View style={styles.firstColumn}>
            <Text style={styles.heading}>Device info</Text>
            <View style={styles.batteryContainer}>
                <BatteryFull size={30} color={colors.mocha.colors.green.hex}/>
                <View style={styles.batteryPercentageContainer}>
                    <View style={styles.batteryPercentageBarWrapper}>
                        <View style={styles.batteryPercentageBarBackground}/>
                        <View style={styles.batteryPercentageBarProgress}/>
                    </View>
                    <View style={styles.batteryPercentageTextContainer}>
                        <Text style={styles.batteryPercentageText}>60%</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.secondColumn}>
            <DeviceInfoSection info={"Last update"} value={"5 minutes ago"}/>
            <DeviceInfoSection info={"Added"} value={"2 months ago"}/>
            <DeviceInfoSection info={"Active"} value={"true"}/>
        </View>
    </View>
}

export default DeviceInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: colors.mocha.colors.base.hex
    },
    firstColumn: {
        flex: 2 / 3,
    },
    batteryContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-start',
    },
    batteryPercentageContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 20,
    },
    batteryPercentageBarWrapper: {
        height: 30,
        justifyContent: 'center'
    },
    batteryPercentageBarBackground: {
        position: "absolute",
        height: 15,
        borderRadius: 100,
        width: '100%',
        backgroundColor: colors.mocha.colors.text.hex
    },
    batteryPercentageBarProgress: {
        position: "absolute",
        height: 15,
        borderRadius: 100,
        width: '60%',
        backgroundColor: colors.mocha.colors.green.hex
    },
    batteryPercentageTextContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 10,
        height: 30,
        width: 50,
        backgroundColor: colors.mocha.colors.text.hex,
    },
    batteryPercentageText: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.mocha.colors.base.hex
    },

    secondColumn: {
        flex: 1 / 3,
        paddingTop: 15,
        paddingBottom: 20,
        justifyContent: 'space-between',
    },
    deviceInfo: {
        fontSize: 15,
        lineHeight: 15,
        fontWeight: '600',
        color: colors.mocha.colors.text.hex
    },
    deviceInfoValue: {
        marginTop: 5,
        fontSize: 15,
        lineHeight: 15,
        color: colors.mocha.colors.text.hex,
        opacity: 0.8
    },
    heading: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '600',
        textAlignVertical: 'center',
        height: 50,
        color: colors.mocha.colors.text.hex
    },
})
