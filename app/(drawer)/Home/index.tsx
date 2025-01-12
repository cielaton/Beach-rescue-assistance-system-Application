import {StyleSheet, View} from "react-native";
import Heading from "@/components/Heading";
import VerticalSeparator from "@/components/VerticalSeparator";
import HorizontalSeparator from "@/components/HorizontalSeparator";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <Heading title={"Overview"}/>
            </View>

            <View style={{flex: 0.85}}>
                <View style={{
                    flex: 1 / 3,
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 2 / 3,
                        flexDirection: 'row'
                    }}>
                        <View style={{flex: 0.5, backgroundColor: 'red'}}></View>
                        <HorizontalSeparator width={20}/>
                        <View style={{flex: 0.5, backgroundColor: 'red'}}></View>
                    </View>
                    <HorizontalSeparator width={20}/>
                    <View style={{flex: 1 / 3, backgroundColor: 'red'}}></View>
                </View>
                <VerticalSeparator height={20}/>
                <View style={{
                    flex: 2 / 3,
                    flexDirection: 'row',
                    marginBottom: 30,
                }}>
                    <View style={{flex: 2 / 3, backgroundColor: 'green'}}></View>
                    <View/>
                    <HorizontalSeparator width={20}/>
                    <View style={{flex: 1 / 3, backgroundColor: 'green'}}></View>
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
    },

    headingWrapper: {
        flex: 0.15
    }

})
