
export const logOut = () => {
    localStorage.removeItem('teamworkToken')
    refreshCurrentPage()
}

export const refreshCurrentPage = () => {
    if(!localStorage.getItem('teamworkToken')){
        window.location.reload()
    }
}

export const decideLinks = () => {
    return localStorage.getItem('teamworkToken')
}