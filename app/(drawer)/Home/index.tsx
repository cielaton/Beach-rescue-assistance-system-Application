import {useState} from "react";
import {StyleSheet, View} from "react-native";

import Heading from "@/components/Heading";
import VerticalSeparator from "@/components/VerticalSeparator";
import HorizontalSeparator from "@/components/HorizontalSeparator";
import colors from "@/constants/colors.json"
import OverallStatusHome from "@/app/(drawer)/Home/OverallStatus.Home";
import DonutChartHome from "@/app/(drawer)/Home/DonutChart.Home";
import MapHome from "@/app/(drawer)/Home/Map.Home";
import SafeAreaHome from "@/app/(drawer)/Home/SafeAreaHome";


const HomeScreen = () => {
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
                    <View style={styles.safeAreaWrapper}>
                        <SafeAreaHome />
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
    safeAreaWrapper: {
        flex: 1 / 3
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
