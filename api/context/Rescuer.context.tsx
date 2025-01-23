import {createContext, useContext, useEffect, useState} from "react";
import {SafeAreaContext} from "@/api/context/SafeArea.context";
import {get_rescuer_by_safe_area} from "@/api/fetch/rescuer";

export const RescuerContext = createContext({})

export const RescuerContextProvider = ({children}: { children: any }) => {
    const {safeArea, isLoadingSafeArea}: any = useContext(SafeAreaContext);

    const [totalRescuers, setTotalRescuers] = useState([])
    const [isLoadingRescuer, setIsLoadingRescuer] = useState(true)

    const send_rescuer_request_by_safe_area = () => {
        setIsLoadingRescuer(true);
        get_rescuer_by_safe_area(safeArea.safeAreaId)
            .then(result => {
                console.log('[Rescuer] Successfully fetched total rescuers');
                setTotalRescuers(result);
                setIsLoadingRescuer(false);
            }).catch(error => {
            console.log('[Rescuer] Failed to fetch total rescuers');
            console.log(error);
        })
    };

    useEffect(() => {
        if (!isLoadingSafeArea) {
            send_rescuer_request_by_safe_area()
        }
    }, [isLoadingSafeArea])

    return <RescuerContext.Provider value={{totalRescuers, isLoadingRescuer}}>
        {children}
    </RescuerContext.Provider>;
}
