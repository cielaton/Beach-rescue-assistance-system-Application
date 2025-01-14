import {FlatList, StyleSheet, View} from "react-native";
import Heading from "@/components/Heading";
import colors from "@/constants/colors.json";
import TableHeaderStatus from "@/app/(drawer)/Status/TableHeader.Status";
import TableRowStatus from "@/app/(drawer)/Status/TableRow.Status";

const data = Array.from(Array(25).keys()).map((item) => {
    return {
        id: item,
        longitude: 108.2232,
        latitude: 16.2232,
        active: true,
        uptime: "1 hour 13 minutes",
        boundary: "inside"
    }
})

const DeviceStatusScreen = () => {
    return <View style={styles.container}>
        <View style={styles.headingWrapper}>
            <Heading title={"Device Status"}/>
        </View>
        <View style={styles.tableHeaderWrapper}>
            <TableHeaderStatus/>
        </View>
        <View style={styles.flatListWrapper}>
            <FlatList
                data={data}
                renderItem={({item}) =>
                    <TableRowStatus id={item.id} longitude={item.longitude} latitude={item.latitude}
                                    active={item.active} uptime={item.uptime} boundary={item.boundary}
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
