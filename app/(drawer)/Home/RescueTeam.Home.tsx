import {StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";
import {Check, ShieldPlus} from "lucide-react-native";
import VerticalSeparator from "@/components/VerticalSeparator";

const Rescuer = () => {
    return <View style={styles.rescuerContainer}>
        <View style={styles.rescuerIconAndNameWrapper}>
            <View style={styles.rescuerIconContainer}>
                <ShieldPlus size={20} color={colors.latte.colors.red.hex}/>
            </View>
            <View style={styles.rescuerNameContainer}>
                <Text style={styles.rescuerName}>Nguyen Van A</Text>
                <Text style={styles.rescuerRole}>Rescuer</Text>
            </View>
        </View>
        <View style={styles.rescuerStatus}>
            <Check size={15} color={colors.latte.colors.base.hex}/>
        </View>
    </View>
}
const RescueTeamHome = () => {
    return <View style={styles.container}>
        <Text style={styles.heading}>Rescue Team</Text>
        <VerticalSeparator height={10}/>
        <Rescuer />
        <VerticalSeparator height={15}/>
        <Rescuer />
        <VerticalSeparator height={15}/>
        <Rescuer />
        <VerticalSeparator height={15}/>
        <Rescuer />
        <VerticalSeparator height={15}/>
        <Rescuer />
    </View>
}

export default RescueTeamHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex
    },
    heading: {
        fontSize: 20,
        color: colors.mocha.colors.base.hex,
        fontWeight: 'bold'
    },
    rescuerContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rescuerIconAndNameWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rescuerIconContainer: {
        height: '90%',
        aspectRatio: 1,
        borderRadius: '100%',
        backgroundColor: colors.latte.colors.mantle.hex,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rescuerNameContainer: {
        marginLeft: 10,
    },
    rescuerName: {
        fontSize: 15,
        lineHeight: 17,
        fontWeight: '600',
        color: colors.mocha.colors.base.hex
    },
    rescuerRole: {
        fontSize: 15,
        lineHeight: 17,
        color: colors.mocha.colors.base.hex
    },
    rescuerStatus: {
        height: '60%',
        aspectRatio: 1,
        borderRadius: '100%',
        backgroundColor: colors.latte.colors.green.hex,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
