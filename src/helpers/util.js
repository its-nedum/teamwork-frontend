
export const logOut = () => {
    localStorage.removeItem('teamworkToken')
    //props.history.push
    refreshCurrentPage()
}

export const refreshCurrentPage = () => {
    if(!localStorage.getItem('teamworkToken')){
        window.location.reload()
    }
}

export const getToken = () => {
    return localStorage.getItem('teamworkToken') 
}

export const loggedIn = () => {
    if(getToken() === null){
        return false
    }else{
        return true
    }
}