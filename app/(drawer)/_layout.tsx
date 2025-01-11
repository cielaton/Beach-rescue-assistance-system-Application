import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const DrawerLayout = () => {
    return <GestureHandlerRootView style={{flex: 1}}>
        <Drawer screenOptions={{
            drawerType: 'permanent', headerShown: false, drawerStyle: {
                width: '20%',
            },
            drawerItemStyle: {
            },
            drawerContentContainerStyle: {
                flex: 1,
                justifyContent: 'center',
            }
        }}>
            <Drawer.Screen name="Home" options={{title: 'Home'}}/>
            <Drawer.Screen name="Location" options={{title: 'Location'}}/>
        </Drawer>
    </GestureHandlerRootView>
}

export default DrawerLayout;
