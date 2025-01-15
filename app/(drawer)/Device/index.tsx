import {StyleSheet, View} from "react-native";
import Heading from "@/components/Heading";
import colors from "@/constants/colors.json";

const DeviceManagementScreen = () => {
    return <View style={styles.container}>
        <View style={styles.headingWrapper}>
            <Heading title={"Device Management"}/>
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
    }
})
