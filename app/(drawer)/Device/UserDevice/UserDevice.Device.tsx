import {FlatList, StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";
import TableHeaderUserDevice from "@/app/(drawer)/Device/UserDevice/TableHeader.UserDevice";
import TableRowUserDevice from "@/app/(drawer)/Device/UserDevice/TableRow.UserDevice";
import {useContext} from "react";
import {DeviceContext} from "@/api/context/Device.context";
import moment from "moment";

const UserDevice = () => {
    const {totalDevices}: any = useContext(DeviceContext);

    return <View style={styles.container}>
        <Text style={styles.heading}>User's Device</Text>
        <TableHeaderUserDevice/>
        <FlatList showsVerticalScrollIndicator={false} data={totalDevices} renderItem={
            ({item}) => {
                return <TableRowUserDevice deviceId={item.deviceId} id={totalDevices.indexOf(item)}
                                           uptime={moment(item.dateAdded).fromNow()}
                                           active={item.isEnabled}/>
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
