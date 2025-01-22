import {StyleSheet, View} from "react-native";

import Heading from "@/components/Heading";
import VerticalSeparator from "@/components/VerticalSeparator";
import HorizontalSeparator from "@/components/HorizontalSeparator";
import colors from "@/constants/colors.json"
import OverallStatusHome from "@/app/(drawer)/Home/OverallStatus.Home";
import DonutChartHome from "@/app/(drawer)/Home/DonutChart.Home";
import MapHome from "@/app/(drawer)/Home/Map.Home";
import SafeAreaHome from "@/app/(drawer)/Home/SafeArea.Home";
import RescueTeamHome from "@/app/(drawer)/Home/RescueTeam.Home";
import {useContext} from "react";
import {RescuerContext} from "@/api/context/Rescuer.context";


const HomeScreen = () => {
    const {totalRescuers}: any = useContext(RescuerContext)
    console.log(totalRescuers)
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
                        <SafeAreaHome/>
                    </View>
                </View>
                <VerticalSeparator height={20}/>
                <View style={styles.secondRow}>
                    <View style={styles.mapWrapper}>
                        <MapHome/>
                    </View>
                    <HorizontalSeparator width={20}/>
                    <View style={styles.rescueTeamWrapper}>
                        <RescueTeamHome/>
                    </View>
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
        flex: 0.13
    },

    mainSection: {
        flex: 0.87
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
    rescueTeamWrapper: {
        flex: 1 / 3,
    }
})
