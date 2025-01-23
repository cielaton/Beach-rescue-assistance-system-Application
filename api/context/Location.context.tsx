import {createContext, useContext, useEffect, useState} from "react";
import {get_location} from "@/api/fetch/location";
import {DeviceContext} from "@/api/context/Device.context";

export const LocationContext = createContext({})

export const LocationContextProvider = ({children}: { children: any }) => {

    const {totalDevices, isLoadingDevice}: any = useContext(DeviceContext);

    const [locations, setLocations] = useState([])
    const [isLoadingLocations, setIsLoadingLocations] = useState(true)

    const send_location_request = () => {
        setIsLoadingLocations(true);
        get_location(totalDevices.map((item: any) => item.deviceId))
            .then(result => {
                console.log('[Location] Successfully fetched device locations');
                setLocations(result);
                setIsLoadingLocations(false);
            }).catch(error => {
            console.log('[Location] Failed to fetch device locations');
            console.log(error);
        })
    }

    useEffect(() => {
        if (!isLoadingDevice) {
            send_location_request()
        }
    }, [isLoadingDevice])

    return <LocationContext.Provider value={{locations, isLoadingLocations}}>
        {children}
    </LocationContext.Provider>
}
