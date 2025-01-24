export const get_device_by_safe_area = async (safeAreaId: string) => {
    return await fetch(process.env.EXPO_PUBLIC_PRIVATE_SERVER + '/device/bySafeAreaId/' + safeAreaId).then(res => res.json()).catch(err => {
        throw err
    });
}

export const get_device_by_device_id = async (deviceId: string) => {
    return await fetch(process.env.EXPO_PUBLIC_PRIVATE_SERVER + '/device/byDeviceId/' + deviceId).then(res => res.json()).catch(err => {
        throw err
    });
}

export const change_device_status =
    async (deviceId: string, status: boolean) => {
        return await fetch(process.env.EXPO_PUBLIC_PRIVATE_SERVER + "/device/activeStatus/",
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "deviceId": deviceId,
                    "status": status
                })
            }
        ).then(res => res.json()).catch(err => {
            throw err
        })
    }
