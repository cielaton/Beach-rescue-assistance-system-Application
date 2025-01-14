import {FlatList, StyleSheet, Text, View} from "react-native";
import Heading from "@/components/Heading";
import colors from "@/constants/colors.json";
import TabletHeaderStatus from "@/app/(drawer)/Status/TabletHeader.Status";

const data = [
    {
        // The default id for table header
        id: 0,
        longitude: 108.2232,
        latitude: 16.2232,
        active: true,
        uptime: "1 hour 13 minutes",
        boundary: "inside"
    },
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
    let tempObject;
    if (id === 0) {
        tempObject = {
            id: "",
            longitude: "Longitude",
            latitude: "Latitude",
            active: "Active",
            uptime: "Uptime",
            boundary: "Boundary"
        }
    } else {
        tempObject = {
            id: id,
            longitude: longitude,
            latitude: latitude,
            active: active,
            uptime: uptime,
            boundary: boundary
        }
    }

    return <View style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>
        <View style={{
            width: '8%',
        }}>
            <Text>{tempObject.id}</Text>
        </View>
        <View style={{
            width: '15%',
        }}>
            <Text>{tempObject.longitude}</Text>
        </View>
        <View style={{
            width: '15%',
        }}>
            <Text>{tempObject.latitude}</Text>
        </View>
        <View style={{
            width: '8%',
        }}>
            <Text>{tempObject.active}</Text>
        </View>
        <View style={{
            width: '20%',
        }}>
            <Text>{tempObject.uptime}</Text>
        </View>
        <View style={{
            width: '10%',
        }}>
            <Text>{tempObject.boundary}</Text>
        </View>
    </View>
}

const DeviceStatusScreen = () => {
    return <View style={styles.container}>
        <View style={styles.headingWrapper}>
            <Heading title={"Device Status"}/>
        </View>
        <TabletHeaderStatus />
        <FlatList
            style={{
                flex: 0.85,
            }}
            data={data}
            renderItem={({item}) =>
                <TableRow id={item.id} longitude={item.longitude} latitude={item.latitude}
                          active={item.active} uptime={item.uptime}
                          boundary={item.boundary}
                />
            }
        />
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
        flex: 0.15
    }
})
