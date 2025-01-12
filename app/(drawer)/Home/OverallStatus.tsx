import {StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";
import {CheckCheck} from "lucide-react-native";

const OverallStatus = () => {
    return <View style={styles.container}>
        <View style={styles.outerGreenCircle}>
            <View style={styles.innerGreenCircle}>
                <View style={styles.whiteCircle}>
                    <CheckCheck size={30} color={colors.latte.colors.green.hex}/>
                </View>
            </View>
        </View>
        <Text style={styles.message}>All good</Text>
    </View>
}

export default OverallStatus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: colors.mocha.colors.base.hex,
        alignItems: 'center',
    },
    outerGreenCircle: {
        height: "60%",
        aspectRatio: 1,
        borderRadius: "100%",
        backgroundColor: 'rgba(166, 227, 161, 0.5)',
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerGreenCircle: {
        height: "80%",
        aspectRatio: 1,
        borderRadius: "100%",
        backgroundColor: colors.mocha.colors.green.hex,
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteCircle: {
        height: "60%",
        aspectRatio: 1,
        borderRadius: "100%",
        backgroundColor: colors.latte.colors.base.hex,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        flex: 1,
        flexWrap: 'wrap',
        marginHorizontal: 20,
        fontSize: 30,
        lineHeight: 30,
        fontWeight: 'bold',
        color: colors.mocha.colors.text.hex,
    }
})
