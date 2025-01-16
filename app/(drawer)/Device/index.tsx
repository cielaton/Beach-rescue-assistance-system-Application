import {StyleSheet, View} from "react-native";
import Heading from "@/components/Heading";
import colors from "@/constants/colors.json";
import HorizontalSeparator from "@/components/HorizontalSeparator";
import VerticalSeparator from "@/components/VerticalSeparator";
import UserDevice from "@/app/(drawer)/Device/UserDevice/UserDevice.Device";
import DeviceInfo from "@/app/(drawer)/Device/DeviceInfo.Device";
import RescueTeamDevice from "@/app/(drawer)/Device/RescueTeam/RescueTeam.Device";

const DeviceManagementScreen = () => {
    return <View style={styles.container}>
        <View style={styles.headingWrapper}>
            <Heading title={"Device Management"}/>
        </View>
        <View style={styles.deviceInfoContainer}>
            <View style={styles.userDeviceWrapper}>
                <UserDevice/>
            </View>
            <HorizontalSeparator width={20}/>
            <View style={styles.deviceInfoAndRescueTeamDeviceWrapper}>
                <View style={styles.deviceInfoWrapper}>
                    <DeviceInfo/>
                </View>
                <VerticalSeparator height={20}/>
                <View style={styles.rescueTeamDeviceWrapper}>
                    <RescueTeamDevice/>
                </View>
            </View>
        </View>
    </View>
}

export default DeviceManagementScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: colors.latte.colors.mantle.hex
    },
    headingWrapper: {
        flex: 0.13
    },
    deviceInfoContainer: {
        flex: 0.87,
        flexDirection: 'row'
    },
    userDeviceWrapper: {
        flex: 0.5
    },
    deviceInfoAndRescueTeamDeviceWrapper: {
        flex: 0.5,
    },
    deviceInfoWrapper: {
        flex: 2 / 7,
    },
    rescueTeamDeviceWrapper: {
        flex: 5 / 7,
    }
})
