const ACCESS__TOKEN = "ACCESS_TOKEN";

export const getAccessToken = () => localStorage.getItem(ACCESS__TOKEN);
export const setAccessToken = (accessToken) => localStorage.setItem(ACCESS__TOKEN, accessToken);
export const removeAccessToken = () => localStorage.removeItem(ACCESS__TOKEN);
