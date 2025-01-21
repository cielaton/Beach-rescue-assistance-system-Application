import {FlatList, StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";
import TableHeaderUserDevice from "@/app/(drawer)/Device/UserDevice/TableHeader.UserDevice";
import TableRowUserDevice from "@/app/(drawer)/Device/UserDevice/TableRow.UserDevice";
import {useContext, useState} from "react";
import {DeviceContext} from "@/api/context/Device.context";
import moment from "moment";

const UserDevice = () => {
    const {totalDevices}: any = useContext(DeviceContext);

    const [pressedDeviceIndex, setPressedDeviceIndex] = useState(0);

    return <View style={styles.container}>
        <Text style={styles.heading}>User's Device</Text>
        <TableHeaderUserDevice/>
        <FlatList showsVerticalScrollIndicator={false} data={totalDevices} renderItem={
            ({item}) => {
                return <TableRowUserDevice id={totalDevices.indexOf(item)} uptime={moment(item.dateAdded).fromNow()}
                                           pressedDeviceIndex={pressedDeviceIndex}
                                           setPressedDeviceIndex={setPressedDeviceIndex} active={item.isEnabled}/>
            }
        }/>
    </View>
}

export default UserDevice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex
    },
    heading: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '600',
        textAlignVertical: 'center',
        height: 50,
        color: colors.mocha.colors.base.hex
    },
})
