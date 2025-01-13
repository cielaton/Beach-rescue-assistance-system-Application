import Mapbox from "@rnmapbox/maps";
import {StyleSheet, View} from "react-native";
import {Camera} from "@rnmapbox/maps";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_OPEN_MAP_PUBLIC_KEY!).then(() => console.log("[Mapbox] Loaded Access Token")).catch(error => console.log("[Mapbox] Failed to load Access Token", error));

const MapHome = () => {
    return <View style={styles.container}>
        <Mapbox.MapView
            scaleBarEnabled={false}
            logoEnabled={false}
            attributionEnabled={false}
            compassEnabled={false}
            style={styles.map}>
            <Camera centerCoordinate={[108.249169, 16.062597]} zoomLevel={14} />
        </Mapbox.MapView>
    </View>
}

export default MapHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: 'green'
    },
    map: {
        flex: 1,
        borderRadius: 15,
        overflow: 'hidden'
    }
})
