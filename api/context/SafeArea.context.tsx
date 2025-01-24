import {createContext, useEffect, useState} from "react";
import {safe_area_request} from "@/api/fetch/safe-area";

export const SafeAreaContext = createContext({})

export const SafeAreaContextProvider = ({children}: { children: any }) => {
    const [safeArea, setSafeArea] = useState({})
    const [isLoadingSafeArea, setIsLoadingSafeArea] = useState(true)

    const sendSafeAreaRequest = () => {
        setIsLoadingSafeArea(true);
        safe_area_request('abcd')
            .then(result => {
                console.log('[Safe Area] Successfully fetched safe area info');
                setSafeArea(result);
                setIsLoadingSafeArea(false);
            }).catch(error => {
            console.log('[Safe Area] Failed to fetch safe area info');
            console.log(error);
        })
    };

    useEffect(() => {
        sendSafeAreaRequest();
    }, [])

    return <SafeAreaContext.Provider value={{
        safeArea,
        isLoadingSafeArea,
    }}>
        {children}
    </SafeAreaContext.Provider>
}
