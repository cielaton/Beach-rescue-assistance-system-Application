import {createContext, useContext, useEffect, useState} from "react";
import {SafeAreaContext} from "@/api/context/SafeArea.context";
import {change_device_status, get_device_by_safe_area} from "@/api/fetch/device";

export const DeviceContext = createContext({})

const sort_inactive_devices = (devices: any) => {
    const inactiveDevices = devices.filter((device: any) => device.isEnabled === false)

    inactiveDevices.forEach((inactiveDevice: any) => {
        // Push the inactive device to the last
        devices.push(devices[devices.indexOf(inactiveDevice)])
        // Remove the redundant device
        devices.splice(devices.indexOf(inactiveDevice), 1)
    })
}

export const DeviceContextProvider = ({children}: { children: any }) => {
    // Get the safe area value
    const {safeArea, isLoadingSafeArea}: any = useContext(SafeAreaContext);

    // State variables to handler device load
    const [totalDevices, setTotalDevices] = useState([])
    const [isLoadingDevice, setIsLoadingDevice] = useState(true)

    // State variables to handler device status change
    const [isLoadingDeviceChange, setIsLoadingDeviceChange] = useState(true)

    const sendDeviceRequestBySafeArea = () => {
        setIsLoadingDevice(true);
        get_device_by_safe_area(safeArea.safeAreaId)
            .then(result => {
                console.log('[Device] Successfully fetched total devices');
                sort_inactive_devices(result);
                setTotalDevices(result);
                setIsLoadingDevice(false);
            }).catch(error => {
            console.log('[Device] Failed to fetch total devices');
            console.log(error);
        })
    };

    // Load the device when safe area has done fetching
    useEffect(() => {
        if (!isLoadingSafeArea) {
            sendDeviceRequestBySafeArea()
        }
    }, [isLoadingSafeArea])

    const sendDeviceStatusChangeRequest = (deviceId: string, status: boolean) => {
        setIsLoadingDeviceChange(true);
        change_device_status(deviceId, status).then(result => {
            console.log('[Device] Successfully request device status change');
            if (typeof result.error !== "undefined") {
                console.log('[Device] Failed to change device status');
                console.log(result.error);
                return
            }
            setIsLoadingDeviceChange(false);
        }).catch(error => {
            console.log('[Device] Failed to change device status');
            console.log(error);
        })
    }

    // Reload the device when device status changed
    useEffect(() => {
        if (!isLoadingDeviceChange) {
            sendDeviceRequestBySafeArea();
        }
    }, [isLoadingDeviceChange])

    return <DeviceContext.Provider value={{totalDevices, isLoadingDevice, sendDeviceStatusChangeRequest}}>
        {children}
    </DeviceContext.Provider>
}
