import {StyleSheet, View} from "react-native";
import Heading from "@/components/Heading";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <Heading title={"Overview"}/>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },

    headingWrapper: {
        flex: 0.15
    }

})
