export const get_location = async (deviceIds: string[]) => {
    return await fetch(process.env.EXPO_PUBLIC_PRIVATE_SERVER + '/location', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "deviceIds": deviceIds
        })
    }).then(res => res.json()).catch(err => {
        throw err
    })
}
