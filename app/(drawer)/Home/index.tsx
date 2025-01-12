import {StyleSheet, View} from "react-native";
import Heading from "@/components/Heading";
import VerticalSeparator from "@/components/VerticalSeparator";
import HorizontalSeparator from "@/components/HorizontalSeparator";
import colors from "@/constants/colors.json"
import {CheckCheck} from "lucide-react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <Heading title={"Overview"}/>
            </View>

            <View style={styles.mainSection}>
                <View style={styles.firstRow}>
                    <View style={styles.firstRowFirstColumn}>
                        <View style={styles.firstRowFirstColumnFirstColumn}>
                            <View style={{
                                height: "60%",
                                aspectRatio: 1,
                                borderRadius: "100%",
                                backgroundColor: 'rgba(166, 227, 161, 0.5)',
                                marginLeft: 30,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    height: "80%",
                                    aspectRatio: 1,
                                    borderRadius: "100%",
                                    backgroundColor: colors.mocha.colors.green.hex,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <View style={{
                                        height: "60%",
                                        aspectRatio: 1,
                                        borderRadius: "100%",
                                        backgroundColor: colors.latte.colors.base.hex,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <CheckCheck size={30} color={colors.latte.colors.green.hex} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <HorizontalSeparator width={20}/>
                        <View style={styles.firstRowFirstColumnSecondColumn}></View>
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
        flex: 1 / 3,
        flexDirection: 'row',
    },
    firstRowFirstColumn: {
        flex: 2 / 3,
        flexDirection: 'row'
    },
    firstRowFirstColumnFirstColumn: {
        flex: 0.5,
        borderRadius: 15,
        backgroundColor: colors.mocha.colors.base.hex,
        justifyContent: 'center',
    },
    firstRowFirstColumnSecondColumn: {
        flex: 0.5,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex
    },
    firstRowSecondColumn: {
        flex: 1 / 3,
        borderRadius: 15,
        backgroundColor: colors.latte.colors.base.hex
    },

    secondRow: {
        flex: 2 / 3,
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
