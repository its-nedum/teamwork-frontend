export const setAuthToken = (token) => {
    return `Bearer ${localStorage.getItem(token)}`
}