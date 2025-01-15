import {StyleSheet, View} from "react-native";
import Heading from "@/components/Heading";
import colors from "@/constants/colors.json";
import HorizontalSeparator from "@/components/HorizontalSeparator";
import VerticalSeparator from "@/components/VerticalSeparator";

const DeviceManagementScreen = () => {
    return <View style={styles.container}>
        <View style={styles.headingWrapper}>
            <Heading title={"Device Management"}/>
        </View>
        <View style={{
            flex: 0.87,
            flexDirection: 'row'
        }}>
            <View style={{
                flex: 0.5,
                borderRadius: 15,
                backgroundColor: colors.latte.colors.base.hex
            }}></View>
            <HorizontalSeparator width={20}/>
            <View style={{
                flex: 0.5,
                borderRadius: 15,
            }}>
                <View style={{
                    flex: 2 / 7,
                    borderRadius: 15,
                    backgroundColor: colors.mocha.colors.base.hex
                }}>
                </View>
                <VerticalSeparator height={20}/>
                <View style={{
                    flex: 5 / 7,
                    borderRadius: 15,
                    backgroundColor: colors.latte.colors.base.hex
                }}>
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
    }
})
