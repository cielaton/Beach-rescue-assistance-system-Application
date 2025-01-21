import {createContext, useState} from "react";

export const SelectedDeviceContext = createContext({})

export const SelectedDeviceContextProvider = ({children}: { children: any }) => {
    const [selectedDevice, setSelectedDevice] = useState({
        deviceType: "User",
        deviceIndex: 0
    })
    return <SelectedDeviceContext.Provider value={{selectedDevice, setSelectedDevice}}>
        {children}
    </SelectedDeviceContext.Provider>
}

