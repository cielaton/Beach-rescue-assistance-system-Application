import {StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";
import {Check, X} from "lucide-react-native";

const TableRowStatus = ({id, longitude, latitude, active, uptime, boundary}: {
    id: number,
    longitude: number,
    latitude: number,
    active: boolean,
    uptime: string,
    boundary: string
}) => {
    // temporary object to hold the table row value
    return <View style={styles.container}>
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
            {active ?
                <View style={styles.activeCircle}>
                    <Check size={15} color={colors.latte.colors.base.hex}/>
                </View> :
                <View style={styles.inactiveCircle}>
                    <X size={15} color={colors.latte.colors.base.hex}/>
                </View>
            }
        </View>
        <View style={styles.uptime}>
            <Text>{uptime}</Text>
        </View>
        <View style={styles.boundary}>
            <Text style={{
                color: colors.latte.colors.green.hex
            }}>{boundary}</Text>
        </View>
    </View>
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
    },
    latitude: {
        width: '15%',
    },
    active: {
        width: '8%',
    },
    activeCircle: {
        height: '50%',
        aspectRatio: 1,
        borderRadius: '100%',
        backgroundColor: colors.latte.colors.green.hex,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactiveCircle: {
        height: '50%',
        aspectRatio: 1,
        borderRadius: '100%',
        backgroundColor: colors.latte.colors.red.hex,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uptime: {
        width: '20%',
    },
    boundary: {
        width: '10%',
    }
})
