import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {DrawerItem} from "@react-navigation/drawer";
import {View} from "react-native";
import {useState} from "react";

const CustomDrawerContent = (props: any) => {
    // Holds the focusing state of the drawer item
    const [drawerItemState, setDrawerItemState] = useState([true, false, false, false, false]);

    return <View style={{
        flex: 1,
        justifyContent: 'center',
    }}>
        <DrawerItem
            label="Home"
            focused={drawerItemState[0]}
            href={"Home"}
            onPress={() => {
                props.navigation.navigate("Home")
                setDrawerItemState([true, false, false, false, false]);
            }}
        />
        <DrawerItem
            label="Location"
            focused={drawerItemState[1]}
            onPress={() => {
                props.navigation.navigate("Location")
                setDrawerItemState([false, true, false, false, false]);
            }}
        />
        <DrawerItem
            label="Status"
            focused={drawerItemState[2]}
            onPress={() => {
                props.navigation.navigate("Device-status")
                setDrawerItemState([false, false, true, false, false]);
            }}
        />
        <DrawerItem
            label="Device"
            focused={drawerItemState[3]}
            onPress={() => {
                props.navigation.navigate("Device-management")
                setDrawerItemState([false, false, false, true, false]);
            }}
        />
        <DrawerItem
            label="Settings"
            focused={drawerItemState[4]}
            onPress={() => {
                props.navigation.navigate("Settings")
                setDrawerItemState([false, false, false, false, true]);
            }}
        />
    </View>
}

const DrawerLayout = () => {
    return <GestureHandlerRootView style={{flex: 1}}>
        <Drawer initialRouteName={"Home"} drawerContent={CustomDrawerContent} screenOptions={{
            drawerType: 'permanent', headerShown: false, drawerStyle: {
                width: '15%',
            },
            drawerItemStyle: {},
            drawerContentContainerStyle: {}
        }}/>
    </GestureHandlerRootView>
}

export default DrawerLayout;
