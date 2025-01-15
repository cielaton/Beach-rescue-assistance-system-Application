import {StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";

const DeviceInfoSection = ({info, value}: { info: string, value: string }) => {
    return <View>
        <Text style={{
            fontSize: 15,
            lineHeight: 15,
            fontWeight: '600',
            color: colors.mocha.colors.text.hex
        }}>{info}</Text>
        <Text style={{
            marginTop: 5,
            fontSize: 15,
            lineHeight: 15,
            color: colors.mocha.colors.text.hex,
            opacity: 0.8
        }}>{value}</Text>
    </View>
}

const DeviceInfo = () => {
    return <View style={styles.container}>
        <View style={styles.firstColumn}>
            <Text style={styles.heading}>Device info</Text>
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
    secondColumn: {
        flex: 1 / 3,
        paddingTop: 15,
        paddingBottom: 20,
        justifyContent: 'space-between',
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
