import {createContext, useEffect, useState} from "react";
import {safe_area_request} from "@/api/fetch/device";

export const SafeAreaContext = createContext({})

export const SafeAreaContextProvider = ({children}: { children: any }) => {
    const [safeArea, setSafeArea] = useState({})
    const [isLoadingSafeArea, setIsLoadingSafeArea] = useState(true)

    const send_safe_area_request = () => {
        setIsLoadingSafeArea(true);
        safe_area_request('abcd')
            .then(result => {
                console.log('[Safe Area] Successfully fetched safe area info');
                setSafeArea(result);
                console.log(result)
                setIsLoadingSafeArea(false);
            }).catch(error => {
            console.log('[Safe Area] Failed to fetch safe area info');
            console.log(error);
        })
    };

    useEffect(() => {
        send_safe_area_request();
    }, [])

    return <SafeAreaContext.Provider value={{
        safeArea: safeArea,
        isLoadingSafeArea: isLoadingSafeArea,
    }}>
        {children}
    </SafeAreaContext.Provider>
}
