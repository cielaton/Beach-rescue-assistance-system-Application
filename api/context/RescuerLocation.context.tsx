import {createContext, useContext, useEffect, useState} from "react";
import {RescuerContext} from "@/api/context/Rescuer.context";
import {get_rescuer_locations} from "@/api/fetch/rescuer-location";

export const RescuerLocationContext = createContext({})

const filter_inactive_rescuer = (rescuers: any) => {
    return rescuers.filter((item: any) => {
            return item.isEnabled === true
        }
    )
}

export const RescuerLocationContextProvider = ({children}: { children: any }) => {
    let {totalRescuers, isLoadingRescuer}: any = useContext(RescuerContext);
    // Filter out the inactive rescuer
    totalRescuers = filter_inactive_rescuer(totalRescuers)

    const [rescuerLocations, setRescuerLocations] = useState([])
    const [isLoadingRescuerLocations, setIsLoadingRescuerLocations] = useState(true);

    const sendRescuerLocationRequest = () => {
        setIsLoadingRescuerLocations(true);
        // Get locations based on the array of rescuer Ids
        get_rescuer_locations(totalRescuers.map((item: any) => item.rescuerId))
            .then(result => {
                console.log('[Rescuer Location] Successfully fetched rescuer locations');
                setRescuerLocations(result);
                setIsLoadingRescuerLocations(false);
            }).catch(error => {
            console.log('[Rescuer Location] Failed to fetch rescuer locations');
            console.log(error);
        })
    }

    useEffect(() => {
        if (!isLoadingRescuer) {
            sendRescuerLocationRequest();
        }
    }, [isLoadingRescuer])

    return <RescuerLocationContext.Provider value={{rescuerLocations, isLoadingRescuerLocations}}>
        {children}
    </RescuerLocationContext.Provider>
}
