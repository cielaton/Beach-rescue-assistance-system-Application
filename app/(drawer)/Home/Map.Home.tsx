import Mapbox, { Camera, PointAnnotation } from "@rnmapbox/maps";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { RescuerLocationContext } from "@/api/context/RescuerLocation.context";
import { ShieldPlus } from "lucide-react-native";
import colors from "@/constants/colors.json";
import { SelectedRescuerContext } from "@/api/context/SelectedRescuer.context";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_OPEN_MAP_PUBLIC_KEY!).then(() => console.log("[Mapbox] Loaded Access Token")).catch(error => console.log("[Mapbox] Failed to load Access Token", error));

const PointAnnotationChildren = ({ rescuerId }: { rescuerId: boolean }) => {

  const { selectedRescuerId }: any = useContext(SelectedRescuerContext)

  console.log(selectedRescuerId)
  return rescuerId === selectedRescuerId ? <View
    style={{ height: 50, ...styles.rescuerIconContainer }}>
    <ShieldPlus size={15} color={colors.latte.colors.red.hex} />
  </View> :
    <View
      style={{ height: 30, ...styles.rescuerIconContainer }}>
      <ShieldPlus size={15} color={colors.latte.colors.red.hex} />
    </View>

}
const MapHome = () => {
  const { rescuerLocations }: any = useContext(RescuerLocationContext)
  const { selectedRescuerId }: any = useContext(SelectedRescuerContext)

  const pointAnnotationComponents = rescuerLocations.map((location: any, index: number) => {
    return <PointAnnotation
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }} key={location.rescuerId + selectedRescuerId} id={index.toString()}
      coordinate={[location.longitude, location.latitude]}>
      <PointAnnotationChildren rescuerId={location.rescuerId} />
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
      <Camera animationMode={"none"} centerCoordinate={[108.249169, 16.062597]} zoomLevel={15} />
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
    flex: 1,
    zIndex: -99,
    aspectRatio: 1,
    borderRadius: '100%',
    backgroundColor: 'rgba(243, 139, 168, 0.5)',
    borderWidth: 1.5,
    borderColor: colors.latte.colors.red.hex,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
