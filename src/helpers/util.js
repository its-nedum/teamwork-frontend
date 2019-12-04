
export const logOut = () => {
    localStorage.removeItem('teamworkToken')
    refreshCurrentPage()
}

export const refreshCurrentPage = () => {
    if(!localStorage.getItem('teamworkToken')){
        window.open('/signin','_self')
    }
}

export const getToken = () => {
    return localStorage.getItem('teamworkToken') 
}