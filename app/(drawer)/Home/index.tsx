import {useState} from "react";
import {Image, StyleSheet, View} from "react-native";

import Heading from "@/components/Heading";
import VerticalSeparator from "@/components/VerticalSeparator";
import HorizontalSeparator from "@/components/HorizontalSeparator";
import colors from "@/constants/colors.json"
import OverallStatusHome from "@/app/(drawer)/Home/OverallStatus.Home";
import DonutChartHome from "@/app/(drawer)/Home/DonutChart.Home";
import MapHome from "@/app/(drawer)/Home/Map.Home";
import {Picker} from "@react-native-picker/picker";


const HomeScreen = () => {
    const [selectedValue, setSelectedValue] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <Heading title={"Overview"}/>
            </View>

            <View style={styles.mainSection}>
                <View style={styles.firstRow}>
                    <View style={styles.firstRowFirstColumn}>
                        <View style={styles.overallStatusWrapper}>
                            <OverallStatusHome/>
                        </View>
                        <HorizontalSeparator width={20}/>
                        <View style={styles.donutChartWrapper}>
                            <DonutChartHome/>
                        </View>
                    </View>
                    <HorizontalSeparator width={20}/>
                    <View style={styles.firstRowSecondColumn}>
                        <Picker
                            style={{
                                marginHorizontal: 15,
                            }}
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
                        }} source={require("@/assets/images/safe-area.png")} />
                    </View>
                </View>
                <VerticalSeparator height={20}/>
                <View style={styles.secondRow}>
                    <View style={styles.mapWrapper}>
                        <MapHome/>
                    </View>
                    <HorizontalSeparator width={20}/>
                    <View style={styles.secondRowSecondColumn}></View>
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: colors.latte.colors.mantle.hex
    },

    headingWrapper: {
        flex: 0.15
    },

    mainSection: {
        flex: 0.85
    },

    firstRow: {
        flex: 2 / 7,
        flexDirection: 'row',
    },
    firstRowFirstColumn: {
        flex: 2 / 3,
        flexDirection: 'row'
    },
    overallStatusWrapper: {
        flex: 0.5
    },
    donutChartWrapper: {
        flex: 0.5
    },
    firstRowSecondColumn: {
        flex: 1 / 3,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex
    },

    secondRow: {
        flex: 5 / 7,
        flexDirection: 'row',
        marginBottom: 30,
    },
    mapWrapper: {
        flex: 2 / 3
    },
    secondRowSecondColumn: {
        flex: 1 / 3,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex
    }
})
