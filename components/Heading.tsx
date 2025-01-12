import {StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";

const Heading = ({title}: { title: string }) => {
    return <View
        style={styles.container}
    >
        <Text style={styles.title}>{title}</Text>
    </View>
}

export default Heading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.mocha.colors.base.hex
    }
})
