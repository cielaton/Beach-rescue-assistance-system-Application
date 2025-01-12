import {StyleSheet, Text, View} from "react-native";
import Heading from "@/components/Heading";
import VerticalSeparator from "@/components/VerticalSeparator";
import HorizontalSeparator from "@/components/HorizontalSeparator";
import colors from "@/constants/colors.json"
import OverallStatus from "@/app/(drawer)/Home/OverallStatus";
import {PieChart} from "react-native-gifted-charts";

const HomeScreen = () => {
    const pieChartData = [
        {value: 25, color: colors.mocha.colors.green.hex},
        {value: 0, color: colors.mocha.colors.yellow.hex},
        {value: 0, color: colors.mocha.colors.red.hex},
    ]

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
                        <View style={styles.firstRowFirstColumnSecondColumn}>
                            <View style={{
                                height: '80%',
                                aspectRatio: 1,
                                marginLeft: 30,
                                justifyContent: 'center'
                            }}>
                                <PieChart
                                    donut
                                    radius={50} innerRadius={30} data={pieChartData}
                                    centerLabelComponent={() => {
                                        return <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                lineHeight: 20,
                                            }}>25</Text>
                                            <Text style={{
                                                fontSize: 15,
                                                lineHeight: 15,
                                            }}>Total</Text>
                                        </View>
                                    }}/>
                            </View>
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
    firstRowFirstColumnSecondColumn: {
        flex: 0.5,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex,
        justifyContent: 'center'
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
