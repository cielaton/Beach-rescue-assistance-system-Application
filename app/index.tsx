import { Redirect } from 'expo-router';
import * as ScreenOrientation from "expo-screen-orientation";

export default function Page() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).then(() => console.log("[Application] Locked the orientation in landscape")).catch(() => console.log("[Application] Failed to locked the orientation in landscape"));
    return <Redirect href={"/(drawer)/Home"} />;
}
