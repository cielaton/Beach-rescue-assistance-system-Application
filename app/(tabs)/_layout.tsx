import { Tabs } from 'expo-router';

const TabLayout = () => {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name="(home)" options={{title: 'Home'}} />
            <Tabs.Screen name="Location" />
        </Tabs>
    );
}

export default TabLayout;
