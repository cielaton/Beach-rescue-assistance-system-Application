import {FlatList, StyleSheet, View} from "react-native";
import Heading from "@/components/Heading";
import colors from "@/constants/colors.json";
import TableHeaderStatus from "@/app/(drawer)/Status/TableHeader.Status";
import TableRowStatus from "@/app/(drawer)/Status/TableRow.Status";
import {useContext} from "react";
import {LocationContext} from "@/api/context/Location.context";
import {DeviceContext} from "@/api/context/Device.context";
import moment from "moment";

const DeviceStatusScreen = () => {

    const {locations}: any = useContext(LocationContext)
    const {totalDevices}: any = useContext(DeviceContext)

    return <View style={styles.container}>
        <View style={styles.headingWrapper}>
            <Heading title={"Device Status"}/>
        </View>
        <View style={styles.tableHeaderWrapper}>
            <TableHeaderStatus/>
        </View>
        <View style={styles.flatListWrapper}>
            <FlatList
                data={locations}
                renderItem={({item}) =>
                    <TableRowStatus id={locations.indexOf(item)} longitude={item.longitude} latitude={item.latitude}
                                    active={totalDevices.find((device: any) => device.deviceId === item.deviceId).isEnabled}
                                    uptime={moment(item.datePublished).fromNow()} boundary={"Inbound"}
                    />
                }
            />
        </View>
    </View>
}

export default DeviceStatusScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: colors.latte.colors.mantle.hex
    },
    headingWrapper: {
        flex: 0.13
    },
    tableHeaderWrapper: {
        flex: 0.05,
        justifyContent: "center",
    },
    flatListWrapper: {
        flex: 0.82
    }
})
