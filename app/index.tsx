import {Redirect} from 'expo-router';
import {SafeAreaContextProvider} from "@/api/context/SafeArea.context";
import {DeviceContextProvider} from "@/api/context/Device.context";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Page() {
    // Lock the landscape orientation by design
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).then(() => console.log("[Application] Locked the orientation in landscape")).catch(() => console.log("[Application] Failed to locked the orientation in landscape"));

    // Make Home component as the default screen
    return <SafeAreaContextProvider>
        <DeviceContextProvider>
            <Redirect href={"/(drawer)/Home"}/>
        </DeviceContextProvider>
    </SafeAreaContextProvider>
}
