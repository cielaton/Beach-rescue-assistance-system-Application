import Mapbox, {Camera, PointAnnotation} from "@rnmapbox/maps";
import {StyleSheet, View} from "react-native";
import {useContext} from "react";
import {RescuerLocationContext} from "@/api/context/RescuerLocation.context";
import {ShieldPlus} from "lucide-react-native";
import colors from "@/constants/colors.json";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_OPEN_MAP_PUBLIC_KEY!).then(() => console.log("[Mapbox] Loaded Access Token")).catch(error => console.log("[Mapbox] Failed to load Access Token", error));

const PointAnnotationChildren = (location: any, index: number) => {
    return <View style={styles.rescuerIconContainer}>
        <ShieldPlus size={15} color={colors.latte.colors.red.hex}/>
    </View>
}
const MapHome = () => {
    const {rescuerLocations}: any = useContext(RescuerLocationContext)
    const pointAnnotationComponents = rescuerLocations.map((location: any, index: number) => {
        return <PointAnnotation key={location.rescuerId} id={index.toString()}
                                coordinate={[location.longitude, location.latitude]}>
            <PointAnnotationChildren/>
        </PointAnnotation>
    })

    return <View style={styles.container}>
        <Mapbox.MapView
            scaleBarEnabled={false}
            logoEnabled={false}
            attributionEnabled={false}
            compassEnabled={false}
            style={styles.map}>
            {pointAnnotationComponents}
            <Camera animationMode={"none"} centerCoordinate={[108.249169, 16.062597]} zoomLevel={15}/>
        </Mapbox.MapView>
    </View>
}

export default MapHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 15,
    },
    map: {
        flex: 1,
        borderRadius: 15,
        overflow: 'hidden'
    },

    rescuerIconContainer: {
        zIndex: -99,
        height: 30,
        aspectRatio: 1,
        borderRadius: '100%',
        backgroundColor: 'rgba(243, 139, 168, 0.5)',
        borderWidth: 1.5,
        borderColor: colors.latte.colors.red.hex,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
