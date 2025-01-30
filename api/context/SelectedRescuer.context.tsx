import {createContext, useState} from "react";

export const SelectedRescuerContext = createContext({})

export const SelectedRescuerContextProvider = ({children}: { children: any }) => {
    const [selectedRescuerId, setSelectedRescuerId] = useState("abcdd");

    return <SelectedRescuerContext.Provider value={{selectedRescuerId, setSelectedRescuerId}}>
        {children}
    </SelectedRescuerContext.Provider>
}
