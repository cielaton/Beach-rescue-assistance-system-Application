import {StyleSheet, Text, View} from "react-native";
import Mapbox, {Camera, FillLayer, PointAnnotation, ShapeSource} from "@rnmapbox/maps";
import colors from "@/constants/colors.json";
import {useContext} from "react";
import {LocationContext} from "@/api/context/Location.context";


const LocationScreen = () => {
    // Create a list of point annotation components
    const {locations}: any = useContext(LocationContext)
    const pointAnnotationComponents = locations.slice(1, 2).map((location: any, index: number) => {
        return <PointAnnotation key={index.toString()} id={index.toString()}
                                coordinate={[location.longitude, location.latitude]}>
            <Text style={styles.deviceNumber}>{index}</Text>
        </PointAnnotation>
    })

    console.log(pointAnnotationComponents)

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
            <Camera animationMode={"none"} centerCoordinate={[108.249169, 16.062597]} zoomLevel={14}/>
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
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.latte.colors.green.hex
    },
})
