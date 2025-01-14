import {StyleSheet, View} from "react-native";
import Mapbox, {Camera} from "@rnmapbox/maps";

const LocationScreen = () => {
    return <View style={styles.container}>
        <Mapbox.MapView
            scaleBarEnabled={false}
            logoEnabled={false}
            attributionEnabled={false}
            compassEnabled={false}
            style={styles.map}>
            <Camera animationMode={"none"} centerCoordinate={[108.249169, 16.062597]} zoomLevel={14}/>
        </Mapbox.MapView>
    </View>
}

export default LocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    map: {
        flex: 1,
        borderRadius: 15,
        overflow: 'hidden'
    }
})
