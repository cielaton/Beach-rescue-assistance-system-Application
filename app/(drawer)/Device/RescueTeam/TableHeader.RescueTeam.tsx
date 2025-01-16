import {StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";

const TableHeaderRescueTeam = () => {
    return <View style={styles.container}>
        <View style={styles.nameWrapper}>
            <Text style={styles.tableHeader}>Name</Text>
        </View>
        <View style={styles.deviceWrapper}>
            <Text style={styles.tableHeader}>Device</Text>
        </View>
        <View style={styles.activeWrapper}>
            <Text style={styles.tableHeader}>Active</Text>
        </View>
    </View>
}

export default TableHeaderRescueTeam;

const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameWrapper: {
        width: '50%',
    },
    deviceWrapper: {
        width: '15%',
    },
    activeWrapper: {
        width: '12%',
        alignItems: 'center'
    },

    tableHeader: {
        fontSize: 15,
        lineHeight: 15,
        color: colors.mocha.colors.base.hex,
        opacity: 0.8
    },
})
