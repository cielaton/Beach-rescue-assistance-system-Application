import {createContext, useContext, useEffect, useState} from "react";
import {SafeAreaContext} from "@/api/context/SafeArea.context";
import {get_rescuer_by_safe_area} from "@/api/fetch/rescuer";

export const RescuerContext = createContext({})

const sort_inactive_rescuers = (rescuers: any) => {
    const inactiveRescuers = rescuers.filter((rescuer: any) => rescuer.isEnabled === false)

    inactiveRescuers.forEach((inactiveRescuer: any) => {
        // Push the inactive device to the last
        rescuers.push(rescuers[rescuers.indexOf(inactiveRescuer)])
        // Remove the redundant device
        rescuers.splice(rescuers.indexOf(inactiveRescuer), 1)
    })
}

export const RescuerContextProvider = ({children}: { children: any }) => {
    const {safeArea, isLoadingSafeArea}: any = useContext(SafeAreaContext);

    const [totalRescuers, setTotalRescuers] = useState([])
    const [isLoadingRescuer, setIsLoadingRescuer] = useState(true)

    const sendRescuerRequestBySafeArea = () => {
        setIsLoadingRescuer(true);
        get_rescuer_by_safe_area(safeArea.safeAreaId)
            .then(result => {
                console.log('[Rescuer] Successfully fetched total rescuers');
                sort_inactive_rescuers(result)
                setTotalRescuers(result);
                setIsLoadingRescuer(false);
            }).catch(error => {
            console.log('[Rescuer] Failed to fetch total rescuers');
            console.log(error);
        })
    };

    useEffect(() => {
        if (!isLoadingSafeArea) {
            sendRescuerRequestBySafeArea()
        }
    }, [isLoadingSafeArea])

    return <RescuerContext.Provider value={{totalRescuers, isLoadingRescuer}}>
        {children}
    </RescuerContext.Provider>;
}
