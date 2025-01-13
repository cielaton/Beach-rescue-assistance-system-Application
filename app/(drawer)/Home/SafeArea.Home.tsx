import {Image, StyleSheet, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import colors from "@/constants/colors.json";
import {useState} from "react";

const SafeAreaHome = () => {
    const [selectedValue, setSelectedValue] = useState("")
    return <View style={styles.container}>
        <Picker
            style={styles.picker}
            mode={"dropdown"}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
            }>
            <Picker.Item label="My Khe Beach" value="My Khe Beach"/>
            <Picker.Item label="Others" value="Others"/>
        </Picker>
        <Image style={{
            alignSelf: 'center',
            height: '50%',
            resizeMode: 'contain'
        }} source={require("@/assets/images/safe-area.png")}/>
    </View>
}

export default SafeAreaHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex
    },
    picker: {
        marginHorizontal: 15,
        color: colors.mocha.colors.base.hex,
    }
})
