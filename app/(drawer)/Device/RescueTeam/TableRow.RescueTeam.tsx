import {StyleSheet, Text, View} from "react-native";
import {ShieldPlus} from "lucide-react-native";
import colors from "@/constants/colors.json";
import ActiveStatusIcon from "@/components/ActiveStatusIcon";

const TableRowRescueTeam = ({id, name, role, active}: { id: number, name: string, role: string, active: boolean }) => {
    return <View style={styles.rescuerContainer}>
        <View style={styles.rescuerIconAndNameWrapper}>
            <View style={styles.rescuerIconAndNameContainer}>
                <View style={styles.rescuerIconContainer}>
                    <ShieldPlus size={20} color={colors.latte.colors.red.hex}/>
                </View>
                <View style={styles.rescuerNameContainer}>
                    <Text style={styles.rescuerName}>{name}</Text>
                    <Text style={styles.rescuerRole}>{role}</Text>
                </View>
            </View>
        </View>
        <View style={styles.deviceNumberWrapper}>
            <View style={styles.deviceCircle}>
                <Text style={styles.deviceNumber}>{id}</Text>
            </View>
        </View>
        <View style={styles.activeWrapper}>
            <ActiveStatusIcon isActive={active}/>
        </View>
    </View>
}

export default TableRowRescueTeam;

const styles = StyleSheet.create({
    rescuerContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rescuerIconAndNameWrapper: {
        width: '50%',
    },
    rescuerIconAndNameContainer: {
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
    deviceNumberWrapper: {
        width: '15%'
    },
    deviceCircle: {
        height: '70%',
        aspectRatio: 1,
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(243, 139, 168, 0.5)'
    },
    deviceNumber: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.latte.colors.red.hex
    },
    activeWrapper: {
        width: '12%',
        justifyContent: 'center',
    },
})
