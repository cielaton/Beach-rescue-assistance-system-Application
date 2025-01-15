import {FlatList, StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";
import TableHeaderUserDevice from "@/app/(drawer)/Device/UserDevice/TableHeader.UserDevice";
import TableRowUserDevice from "@/app/(drawer)/Device/UserDevice/TableRow.UserDevice";


const data = Array.from(Array(25).keys()).map((item) => {
    return {
        id: item,
        uptime: "1 hour 13 minutes",
        active: true,
    }
})

const UserDevice = () => {
    return <View style={styles.container}>
        <Text style={styles.heading}>User's Device</Text>
        <TableHeaderUserDevice/>
        <FlatList data={data} renderItem={
            ({item}) => {
                return <TableRowUserDevice id={item.id} uptime={item.uptime} active={item.active}/>
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
