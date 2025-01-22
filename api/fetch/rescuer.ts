export const get_rescuer_by_safe_area = async (safeAreaId: string) => {
    return await fetch(process.env.EXPO_PUBLIC_PRIVATE_SERVER + '/rescuer/bySafeAreaId/' + safeAreaId).then(res => res.json()).catch(err => {
        throw err
    });
}

export const get_rescuer_by_rescuer_id = async (rescuerId: string) => {
    return await fetch(process.env.EXPO_PUBLIC_PRIVATE_SERVER + '/rescuer/byRescuerId/' + rescuerId).then(res => res.json()).catch(err => {
        throw err
    });
}
