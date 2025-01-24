import {StyleSheet, View} from "react-native";
import {Check, X} from "lucide-react-native";
import colors from "@/constants/colors.json";

const ActiveStatusIcon = ({isActive}: { isActive: boolean }) => {
    return isActive ?
        <View style={styles.activeIconContainer}>
            <Check size={15} color={colors.latte.colors.base.hex}/>
        </View> :
        <View style={styles.inactiveIconContainer}>
            <X size={15} color={colors.latte.colors.base.hex}/>
        </View>
}

export default ActiveStatusIcon;
const styles = StyleSheet.create({
    container: {},
    activeIconContainer: {
        height: '60%',
        aspectRatio: 1,
        borderRadius: '100%',
        backgroundColor: colors.latte.colors.green.hex,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactiveIconContainer: {
        height: '60%',
        aspectRatio: 1,
        borderRadius: '100%',
        backgroundColor: colors.latte.colors.red.hex,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
