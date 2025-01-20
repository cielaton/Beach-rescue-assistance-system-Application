export const safe_area_request = async (safeAreaId: string) => {
    return await fetch(process.env.EXPO_PUBLIC_PRIVATE_SERVER + '/safe-area?safeAreaId=' + safeAreaId)
        .then(res => {
            return res.json()
        })
        .catch(err => {
                throw err;
            }
        );
}
