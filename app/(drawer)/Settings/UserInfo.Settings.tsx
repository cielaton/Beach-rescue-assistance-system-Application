import {Image, StyleSheet, Text, View} from "react-native";
import colors from "@/constants/colors.json";

const UserInfoSettings = () => {
    return <View style={styles.container}>
        <View style={styles.imageWrapper}>
            <Image style={{height: "100%", width: "100%"}}
                   source={require("@/assets/images/avatar.jpeg")}/>
        </View>
        <View style={styles.userNameAndRoleContainer}>
            <Text style={styles.userName}>Nguyen Van A</Text>
            <Text style={styles.userRole}>Rescuer</Text>
        </View>
    </View>
}

export default UserInfoSettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    imageWrapper: {
        height: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        overflow: 'hidden',
        borderRadius: "100%"
    },

    userNameAndRoleContainer: {
        marginLeft: 20
    },
    userName: {
        fontSize: 25,
        fontWeight: '500',
        color: colors.mocha.colors.base.hex
    },
    userRole: {
        fontSize: 20,
        color: colors.mocha.colors.base.hex,
        opacity: 0.7
    }
})
