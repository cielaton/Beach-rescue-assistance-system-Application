import {StyleSheet, Text, View} from "react-native";
import Mapbox, {Camera, FillLayer, PointAnnotation, ShapeSource} from "@rnmapbox/maps";
import colors from "@/constants/colors.json";
import {useContext} from "react";
import {LocationContext} from "@/api/context/Location.context";


const LocationScreen = () => {
    // Create a list of point annotation components
    const {locations}: any = useContext(LocationContext)
    const pointAnnotationComponents = locations.map((location: any, index: number) => {
        return <PointAnnotation key={location.deviceId} id={index.toString()}
                                coordinate={[location.longitude, location.latitude]}>
            <Text style={styles.deviceNumber}>{index}</Text>
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
            <ShapeSource id="polygon" shape={{
                coordinates: [
                    [
                        [108.249169, 16.062597],
                        [108.247849, 16.064937],
                        [108.246465, 16.063999],
                        [108.246637, 16.062184],
                        [108.249501, 16.060699]
                    ]
                ],
                type: 'Polygon'
            }}>
                <FillLayer
                    id="polygon"
                    style={{
                        fillColor: 'rgba(0,0,0,0)',
                        fillOutlineColor: 'red',
                    }}
                /></ShapeSource>
            <Camera animationMode={"none"} centerCoordinate={[108.249172, 16.062595]} zoomLevel={16.5}/>
        </Mapbox.MapView>
    </View>
}

export default LocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        overflow: 'hidden'
    },
    deviceNumber: {
        borderWidth: 2,
        borderColor: colors.latte.colors.green.hex,
        borderRadius: 1000,
        height: 30,
        aspectRatio: 1,
        backgroundColor: 'rgba(166, 227, 161, 0.5)',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.latte.colors.green.hex
    },
})
