import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "@/constants/colors.json";
import {Languages} from "lucide-react-native";

const SettingOption = () => {
    return <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
            <Languages size={20} color={colors.mocha.colors.base.hex}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.optionName}>Language</Text>
            <Text style={styles.optionValue}>English</Text>
        </View>
    </TouchableOpacity>
}

export default SettingOption;

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row'
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
