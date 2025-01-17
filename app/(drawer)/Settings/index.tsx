import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "@/constants/colors.json"
import Heading from "@/components/Heading";
import UserInfoSettings from "@/app/(drawer)/Settings/UserInfo.Settings";
import SettingOption from "@/app/(drawer)/Settings/SettingOption.Settings"
import {Bell, Languages, Sun} from "lucide-react-native"

const HorizontalLine = () => {
    return <View style={styles.horizontalLineContainer}>
        <View style={styles.horizontalLine}/>
    </View>
}
const SettingsScreen = () => {
    return <View style={styles.container}>
        <View style={styles.headingWrapper}>
            <Heading title={"Settings"}/>
        </View>
        <View style={styles.userInfoWrapper}>
            <UserInfoSettings/>
        </View>
        <View style={styles.settingOptionsWrapper}>
            <SettingOption Icon={Languages} optionName={"Language"} optionValue={"English"}/>
            <HorizontalLine/>
            <SettingOption Icon={Bell} optionValue={"Notification"} optionName={"Enabled"}/>
            <HorizontalLine/>
            <SettingOption Icon={Sun} optionName={"Theme"} optionValue={"Light"}/>
        </View>
        <TouchableOpacity style={styles.logOutContainer}>
            <Text style={styles.logOutText}>Log Out</Text>
        </TouchableOpacity>
    </View>
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "25%",
        backgroundColor: colors.latte.colors.mantle.hex
    },
    headingWrapper: {
        flex: 0.13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userInfoWrapper: {
        flex: 0.15
    },
    settingOptionsWrapper: {
        flex: 0.3,
    },
    horizontalLineContainer: {
        height: 10,
        justifyContent: 'center'
    },
    horizontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: colors.latte.colors.surface0.hex,
    },
    logOutContainer: {
        marginHorizontal: "35%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.06,
        backgroundColor: colors.mocha.colors.red.hex
    },
    logOutText: {
        color: colors.mocha.colors.base.hex,
        fontSize: 16,
        fontWeight: '600'
    }
})
