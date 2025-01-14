import {FlatList, StyleSheet, Text, View} from "react-native";
import Heading from "@/components/Heading";
import colors from "@/constants/colors.json";
import TableHeaderStatus from "@/app/(drawer)/Status/TableHeader.Status";
import {Check} from "lucide-react-native";

const data = [
    {
        id: 1,
        longitude: 108.2232,
        latitude: 16.2232,
        active: true,
        uptime: "1 hour 13 minutes",
        boundary: "inside"
    },
    {
        id: 2,
        longitude: 108.2232,
        latitude: 16.2232,
        active: true,
        uptime: "1 hour 13 minutes",
        boundary: "inside"
    },
    {
        id: 3,
        longitude: 108.2232,
        latitude: 16.2232,
        active: true,
        uptime: "1 hour 13 minutes",
        boundary: "inside"
    },
    {
        id: 4,
        longitude: 108.2232,
        latitude: 16.2232,
        active: true,
        uptime: "1 hour 13 minutes",
        boundary: "inside"
    }
]

const TableRow = ({id, longitude, latitude, active, uptime, boundary}: {
    id: number,
    longitude: number,
    latitude: number,
    active: boolean,
    uptime: string,
    boundary: string
}) => {
    // temporary object to hold the table row value
    return <View style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <View style={{
            width: '8%',
        }}>
            <View style={{
                height: '80%',
                aspectRatio: 1,
                borderRadius: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(166, 227, 161, 0.5)'
            }}>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: colors.latte.colors.green.hex
                }}>{id}</Text>
            </View>
        </View>
        <View style={{
            width: '15%',
        }}>
            <Text>{longitude}</Text>
        </View>
        <View style={{
            width: '15%',
        }}>
            <Text>{latitude}</Text>
        </View>
        <View style={{
            width: '8%',
        }}>

            <View style={
                {
                    height: '60%',
                    aspectRatio: 1,
                    borderRadius: '100%',
                    backgroundColor: colors.latte.colors.green.hex,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Check size={15} color={colors.latte.colors.base.hex}/>
            </View>
        </View>
        <View style={{
            width: '20%',
        }}>
            <Text>{uptime}</Text>
        </View>
        <View style={{
            width: '10%',
        }}>
            <Text style={{
                color: colors.latte.colors.green.hex
            }}>{boundary}</Text>
        </View>
    </View>
}

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
                    <TableRow id={item.id} longitude={item.longitude} latitude={item.latitude}
                              active={item.active} uptime={item.uptime}
                              boundary={item.boundary}
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
