import {useContext, useState} from "react";
import {StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import colors from "@/constants/colors.json";
import {Trash} from "lucide-react-native";
import {SelectedDeviceContext} from "@/api/context/SelectedDevice.context";
import {DeviceContext} from "@/api/context/Device.context";

const TableRowUserDevice = ({deviceId, id, uptime, active}: {
    deviceId: string,
    id: number,
    uptime: string,
    active: boolean,
}) => {
    const {selectedDevice, setSelectedDevice}: any = useContext(SelectedDeviceContext)
    const {sendDeviceStatusChangeRequest}: any = useContext(DeviceContext)

    const [enabled, setEnabled] = useState(active);

    return <TouchableOpacity onPress={() => {
        setSelectedDevice({
            deviceType: "User",
            deviceIndex: id
        })
    }} style={selectedDevice.deviceIndex === id ? {
        ...styles.container,
        backgroundColor: 'rgba(203, 166, 247, 0.5)'
    } : styles.container}>
        <View style={styles.device}>
            <View style={styles.deviceCircle}>
                <Text style={styles.deviceNumber}>{id}</Text>
            </View>
        </View>
        <View style={styles.uptime}>
            <Text>{uptime}</Text>
        </View>
        <View style={styles.active}>
            <View style={styles.switchWrapper}>
                <Switch
                    trackColor={{false: colors.mocha.colors.base.hex, true: colors.mocha.colors.subtext1.hex}}
                    thumbColor={enabled ? colors.latte.colors.mauve.hex : colors.latte.colors.crust.hex}
                    onValueChange={() => {
                        console.log("Pressed device id: ", deviceId)
                        sendDeviceStatusChangeRequest(deviceId, !enabled)
                        setEnabled(!enabled);
                    }}
                    value={enabled}
                />
            </View>
        </View>
        <View style={styles.remove}>
            <TouchableOpacity onPress={() => {
            }}>
                <View style={styles.removeIconWrapper}>
                    <Trash size={20} color={colors.latte.colors.red.hex}/>
                </View>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
}

export default TableRowUserDevice;

const styles = StyleSheet.create({
    container: {
        height: 45,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    device: {
        width: '20%',
        paddingLeft: 10,
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
    uptime: {
        width: '40%',
    },
    active: {
        width: '15%',
        alignItems: 'center'
    },
    switchWrapper: {
        height: '50%',
        aspectRatio: 1,
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    remove: {
        width: '18%',
        alignItems: 'center'
    },
    removeIconWrapper: {
        height: 45,
        aspectRatio: 1,
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
