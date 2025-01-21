import {createContext, useContext, useEffect, useState} from "react";
import {SafeAreaContext} from "@/api/context/SafeArea.context";
import {get_device_by_safe_area} from "@/api/fetch/device";

export const DeviceContext = createContext({})

export const DeviceContextProvider = ({children}: { children: any }) => {
    // Get the safe area value
    const {safeArea, isLoadingSafeArea}: any = useContext(SafeAreaContext);

    const [totalDevices, setTotalDevices] = useState([])
    const [isLoadingDevice, setIsLoadingDevice] = useState(true)

    const send_device_request_by_safe_area = () => {
        setIsLoadingDevice(true);
        get_device_by_safe_area(safeArea.safeAreaId)
            .then(result => {
                console.log('[Device] Successfully fetched total devices');
                setTotalDevices(result);
                setIsLoadingDevice(false);
            }).catch(error => {
            console.log('[Device] Failed to fetch total devices');
            console.log(error);
        })
    };

    useEffect(() => {
        if (!isLoadingSafeArea) {
            send_device_request_by_safe_area()
        }
    }, [isLoadingSafeArea])

    return <DeviceContext.Provider value={{totalDevices, isLoadingDevice}}>
        {children}
    </DeviceContext.Provider>
}
