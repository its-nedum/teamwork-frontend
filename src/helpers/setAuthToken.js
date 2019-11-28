
const setAuthToken = () => {

    return `Bearer ${localStorage.getItem('teamworkToken')}`
}

export default setAuthToken