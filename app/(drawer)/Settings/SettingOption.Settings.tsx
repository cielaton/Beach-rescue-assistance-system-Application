import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "@/constants/colors.json";

const SettingOption = ({Icon, optionName, optionValue}: { Icon: any, optionName: string, optionValue: string }) => {
    return <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
            <Icon size={20} color={colors.mocha.colors.base.hex}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.optionName}>{optionName}</Text>
            <Text style={styles.optionValue}>{optionValue}</Text>
        </View>
    </TouchableOpacity>
}

export default SettingOption;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
    },
    iconContainer: {
        height: "80%",
        aspectRatio: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.latte.colors.base.hex,
    },
    textContainer: {
        marginLeft: 10
    },
    optionName: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.mocha.colors.base.hex
    },
    optionValue: {
        fontSize: 15,
        opacity: 0.7,
        color: colors.mocha.colors.base.hex
    }
})
