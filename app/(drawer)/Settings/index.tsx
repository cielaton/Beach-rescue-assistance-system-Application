import {StyleSheet, View} from "react-native";
import colors from "@/constants/colors.json"
import Heading from "@/components/Heading";
import UserInfoSettings from "@/app/(drawer)/Settings/UserInfo.Settings";
import SettingOption from "@/app/(drawer)/Settings/SettingOption.Settings"

const SettingsScreen = () => {
    return <View style={styles.container}>
        <View style={styles.headingWrapper}>
            <Heading title={"Settings"}/>
        </View>
        <View style={styles.userInfoWrapper}>
            <UserInfoSettings/>
        </View>
        <View style={styles.settingOptionsWrapper}>
            <SettingOption/>
        </View>
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
        flex: 0.2
    },
    settingOptionsWrapper: {
        flex: 0.3,
    }
})
