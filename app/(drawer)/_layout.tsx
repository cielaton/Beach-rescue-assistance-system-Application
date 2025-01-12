import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {DrawerItem} from "@react-navigation/drawer";
import {StyleSheet, View} from "react-native";
import {useState} from "react";
import {Box, CircleAlert, Home, LocateFixed, Settings} from "lucide-react-native";
import colors from "@/constants/colors.json"

const CustomDrawerItem = ({Icon, labels, index, drawerItemState, styles, setDrawerItemState, navigation}: {
    Icon: any,
    labels: string[],
    index: number,
    drawerItemState: boolean[],
    styles: any,
    setDrawerItemState: any,
    navigation: any
}) => {
    return <DrawerItem
        label={labels[index]}
        labelStyle={drawerItemState[index] ? styles.drawerPressedLabel : styles.drawerLabel}
        icon={() => <Icon
            color={drawerItemState[index] ? colors.latte.colors.mauve.hex : colors.mocha.colors.base.hex} size={16}/>}
        style={drawerItemState[index] ? styles.drawerItemContainerPressed : styles.drawerItemContainer}
        focused={drawerItemState[index]}
        onPress={() => {
            navigation.navigate(labels[index]);
            // Set the new focus array to focus into the pressed item
            setDrawerItemState(
                drawerItemState.map((item: boolean, stateIndex: number) => {
                    // Map the corresponding focus value to true and the rest to false
                    return index === stateIndex;
                })
            );
        }}
    />
}

const CustomDrawerContent = (props: any) => {
    // Holds the focusing state of the drawer item
    const [drawerItemState, setDrawerItemState] = useState([true, false, false, false, false]);

    const labels = ["Home", "Location", "Status", "Device", "Settings"]

    return <View style={{
        flex: 1,
        justifyContent: 'center',
    }}>
        <CustomDrawerItem Icon={Home} labels={labels} index={0} drawerItemState={drawerItemState}
                          setDrawerItemState={setDrawerItemState}
                          navigation={props.navigation} styles={styles}/>
        <CustomDrawerItem Icon={LocateFixed} labels={labels} index={1} drawerItemState={drawerItemState}
                          setDrawerItemState={setDrawerItemState}
                          navigation={props.navigation} styles={styles}/>
        <CustomDrawerItem Icon={CircleAlert} labels={labels} index={2} drawerItemState={drawerItemState}
                          setDrawerItemState={setDrawerItemState}
                          navigation={props.navigation} styles={styles}/>
        <CustomDrawerItem Icon={Box} labels={labels} index={3} drawerItemState={drawerItemState}
                          setDrawerItemState={setDrawerItemState}
                          navigation={props.navigation} styles={styles}/>
        <CustomDrawerItem Icon={Settings} labels={labels} index={4} drawerItemState={drawerItemState}
                          setDrawerItemState={setDrawerItemState}
                          navigation={props.navigation} styles={styles}/>
    </View>
}

const DrawerLayout = () => {
    return <GestureHandlerRootView style={{flex: 1}}>
        <Drawer initialRouteName={"Home"} drawerContent={CustomDrawerContent} screenOptions={{
            drawerType: 'permanent', headerShown: false, drawerStyle: {
                width: '15%',
            },
            drawerLabelStyle: {fontSize: 35},
            drawerItemStyle: {},
        }}/>
    </GestureHandlerRootView>
}

export default DrawerLayout;

const styles = StyleSheet.create({
    drawerItemContainerPressed: {
        backgroundColor: colors.mocha.colors.mauve.hex,
        borderRadius: 10,
    },
    drawerItemContainer: {
        backgroundColor: colors.latte.colors.mantle.hex,
        borderRadius: 10,
    },
    drawerPressedLabel: {
        fontSize: 15,
        color: colors.latte.colors.mauve.hex
    },
    drawerLabel: {
        fontSize: 15,
        color: colors.mocha.colors.base.hex
    },
})
