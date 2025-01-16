import {FlatList, StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";
import TableHeaderRescueTeam from "@/app/(drawer)/Device/RescueTeam/TableHeader.RescueTeam";
import TableRowRescueTeam from "@/app/(drawer)/Device/RescueTeam/TableRow.RescueTeam";
import VerticalSeparator from "@/components/VerticalSeparator";


const data = Array.from(Array(10).keys()).map((item) => {
    return {
        id: item,
        name: "Nguyen Van A",
        role: "Rescuer",
        active: true,
    }
})

const RescueTeamDevice = () => {
    return <View style={styles.container}>
        <Text style={styles.heading}>Rescue Team</Text>
        <TableHeaderRescueTeam/>
        <FlatList data={data} renderItem={({item}) => {
            return <View>
                <TableRowRescueTeam id={item.id} name={item.name} role={item.role} active={item.active}/>
                <VerticalSeparator height={5}/>
            </View>
        }}/>
    </View>
}

export default RescueTeamDevice;

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
