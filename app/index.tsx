import {Redirect} from 'expo-router';
import * as ScreenOrientation from "expo-screen-orientation";

export default function Page() {
    // Lock the landscape orientation by design
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).then(() => console.log("[Application] Locked the orientation in landscape")).catch(() => console.log("[Application] Failed to locked the orientation in landscape"));

    // Make Home component as the default screen
    return <Redirect href={"/(drawer)/Home"}/>;
}
