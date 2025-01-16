import {StyleSheet, View} from "react-native";
import colors from "@/constants/colors.json";

const RescueTeamDevice = () => {
    return <View style={styles.container}></View>
}

export default RescueTeamDevice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex
    }
})
