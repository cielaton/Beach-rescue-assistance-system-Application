import {StyleSheet, Text, View} from "react-native";
import {PieChart} from "react-native-gifted-charts";
import colors from "@/constants/colors.json";

const pieChartData = [
    {value: 25, color: colors.mocha.colors.green.hex},
    {value: 0, color: colors.mocha.colors.yellow.hex},
    {value: 0, color: colors.mocha.colors.red.hex},
]

const LegendItem = ({color, description}: { color: string, description: string }) => {
    return <View style={styles.legendItemContainer}>
        <View style={{...styles.legendItemDot, backgroundColor: color}}/>
        <Text style={styles.legendItemDescription}>{description}</Text>
    </View>
}

const DonutChartHome = () => {
    return <View style={styles.container}>
        <View style={styles.chartContainer}>
            <PieChart
                donut
                radius={50} innerRadius={30} data={pieChartData}
                centerLabelComponent={() => {
                    return <View style={styles.centerLabelContainer}>
                        <Text style={styles.valueText}>25</Text>
                        <Text style={styles.totalText}>Total</Text>
                    </View>
                }}/>
        </View>
        <View style={styles.legendContainer}>
            <LegendItem color={colors.mocha.colors.green.hex} description={"Fine"}/>
            <LegendItem color={colors.mocha.colors.yellow.hex} description={"Waring"}/>
            <LegendItem color={colors.mocha.colors.red.hex} description={"Alert"}/>
        </View>
    </View>
}

export default DonutChartHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex,
        alignItems: 'center'
    },
    chartContainer: {
        height: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerLabelContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    valueText: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 20,
        color: colors.mocha.colors.base.hex,
    },
    totalText: {
        fontSize: 15,
        lineHeight: 15,
        color: colors.mocha.colors.base.hex,
    },

    legendContainer: {
        height: '50%',
        justifyContent: 'space-between'
    },
    legendItemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    legendItemDot: {
        height: 15,
        aspectRatio: 1,
        borderRadius: '100%',
    },
    legendItemDescription: {
        marginLeft: 5,
        fontSize: 15,
        lineHeight: 15,
    }
})
