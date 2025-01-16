import {Image, StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json"
import Heading from "@/components/Heading";

const SettingsScreen = () => {
    return <View style={styles.container}>
        <View style={styles.headingWrapper}>
            <Heading title={"Settings"}/>
        </View>
        <View style={styles.userInfoWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={{height: "100%", width: "100%"}}
                       source={require("@/assets/images/avatar.jpeg")}/>
            </View>
            <View style={{marginLeft: 20}}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: '500',
                    color: colors.mocha.colors.base.hex
                }}>Nguyen Van A</Text>
                <Text style={{
                    fontSize: 20,
                    color: colors.mocha.colors.base.hex,
                    opacity: 0.7
                }}>Rescuer</Text>
            </View>
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
        flex: 0.2,
        flexDirection: 'row',
    },
    imageWrapper: {
        height: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        overflow: 'hidden',
        borderRadius: "100%"
    }
})
