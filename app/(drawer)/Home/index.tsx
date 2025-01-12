import {StyleSheet, Text, View} from "react-native";
import Heading from "@/components/Heading";
import VerticalSeparator from "@/components/VerticalSeparator";
import HorizontalSeparator from "@/components/HorizontalSeparator";
import colors from "@/constants/colors.json"
import OverallStatus from "@/app/(drawer)/Home/OverallStatus";
import DonutChart from "@/app/(drawer)/Home/DonutChart";

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
                            <OverallStatus/>
                        </View>
                        <HorizontalSeparator width={20}/>
                        <View style={styles.donutChartWrapper}>
                            <DonutChart />
                        </View>
                    </View>
                    <HorizontalSeparator width={20}/>
                    <View style={styles.firstRowSecondColumn}></View>
                </View>
                <VerticalSeparator height={20}/>
                <View style={styles.secondRow}>
                    <View style={styles.secondRowFirstColumn}></View>
                    <View/>
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
    secondRowFirstColumn: {
        flex: 2 / 3,
        borderRadius: 15,
        backgroundColor: 'green'
    },
    secondRowSecondColumn: {
        flex: 1 / 3,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex
    }
})
