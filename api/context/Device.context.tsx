import {createContext, useContext, useEffect, useState} from "react";
import {SafeAreaContext} from "@/api/context/SafeArea.context";

export const DeviceContext = createContext({})

export const DeviceContextProvider = ({children}: { children: any }) => {
    // Get the safe area value
    const {safeArea, isLoadingSafeArea}: any = useContext(SafeAreaContext);

    const [device, setDevice] = useState([])
    const [isLoadingDevice, setIsLoadingDevice] = useState(true)

    useEffect(() => {
        setIsLoadingDevice(true)
        if (!isLoadingSafeArea) {
            setDevice(safeArea.deviceIds)
        }
    }, [])

    return <DeviceContext.Provider value={{}}>
        {children}
    </DeviceContext.Provider>
}
