import {StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json"

const TableHeaderStatus = () => {
    return <View style={styles.container}>
        <View style={styles.deviceWrapper}>
            <Text style={styles.text}>Device</Text>
        </View>
        <View style={styles.longitudeWrapper}>
            <Text style={styles.text}>Longitude</Text>
        </View>
        <View style={styles.latitudeWrapper}>
            <Text style={styles.text}>Latitude</Text>
        </View>
        <View style={styles.activeWrapper}>
            <Text style={styles.text}>Active</Text>
        </View>
        <View style={styles.uptimeWrapper}>
            <Text style={styles.text}>Uptime</Text>
        </View>
        <View style={styles.boundaryWrapper}>
            <Text style={styles.text}>Boundary</Text>
        </View>
    </View>
}
export default TableHeaderStatus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deviceWrapper: {
        width: '8%',
    },
    longitudeWrapper: {
        width: '15%',
    },
    latitudeWrapper: {
        width: '15%',
    },
    activeWrapper: {
        width: '8%',
    },
    uptimeWrapper: {
        width: '20%',
    },
    boundaryWrapper: {
        width: '10%',
    },
    text: {
        fontSize: 15,
        lineHeight: 15,
        opacity: 0.8,
        color: colors.mocha.colors.base.hex,
    }
})
