import {StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";

const TableHeaderUserDevice = () => {
    return <View style={styles.container}>
        <View style={styles.deviceWrapper}>
            <Text style={styles.tableHeader}>Device</Text>
        </View>
        <View style={styles.uptimeWrapper}>
            <Text style={styles.tableHeader}>Uptime</Text>
        </View>
        <View style={styles.activeWrapper}>
            <Text style={styles.tableHeader}>Active</Text>
        </View>
        <View style={styles.removeWrapper}>
            <Text style={styles.tableHeader}>Remove</Text>
        </View>
    </View>
}

export default TableHeaderUserDevice;

const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deviceWrapper: {
        width: '15%',
    },
    uptimeWrapper: {
        width: '40%',
    },
    activeWrapper: {
        width: '15%',
    },
    removeWrapper: {
        width: '18%',
    },

    tableHeader: {
        fontSize: 15,
        lineHeight: 15,
        color: colors.mocha.colors.base.hex,
        opacity: 0.8
    },
})
