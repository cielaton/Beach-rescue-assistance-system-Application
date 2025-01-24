import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "@/constants/colors.json";
import ActiveStatusIcon from "@/components/ActiveStatusIcon";

const TableRowStatus = ({id, longitude, latitude, active, uptime, boundary}: {
    id: number,
    longitude: number,
    latitude: number,
    active: boolean,
    uptime: string,
    boundary: string
}) => {
    // temporary object to hold the table row value
    return <TouchableOpacity style={styles.container}>
        <View style={styles.device}>
            <View style={styles.deviceCircle}>
                <Text style={styles.deviceNumber}>{id}</Text>
            </View>
        </View>
        <View style={styles.longitude}>
            <Text>{longitude}</Text>
        </View>
        <View style={styles.latitude}>
            <Text>{latitude}</Text>
        </View>
        <View style={styles.active}>
            <ActiveStatusIcon isActive={active}/>
        </View>
        <View style={styles.uptime}>
            <Text>{uptime}</Text>
        </View>
        <View style={styles.boundary}>
            <Text style={{
                color: colors.latte.colors.green.hex
            }}>{boundary}</Text>
        </View>
    </TouchableOpacity>
}

export default TableRowStatus;

const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    device: {
        width: '8%',
        justifyContent: 'center'
    },
    deviceCircle: {
        height: '70%',
        aspectRatio: 1,
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(166, 227, 161, 0.5)'
    },
    deviceNumber: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.latte.colors.green.hex
    },
    longitude: {
        width: '15%',
        justifyContent: 'center'
    },
    latitude: {
        width: '15%',
        justifyContent: 'center'
    },
    active: {
        width: '8%',
        justifyContent: 'center',
        height: '90%'
    },
    uptime: {
        width: '20%',
        justifyContent: 'center'
    },
    boundary: {
        width: '10%',
        justifyContent: 'center'
    }
})
