export const get_rescuer_locations = async (rescuerIds: string[]) => {
    return await fetch(process.env.EXPO_PUBLIC_PRIVATE_SERVER + '/rescuer-location', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "rescuerIds": rescuerIds
        })
    }).then(res => res.json()).catch(err => {
        throw err
    })
}
