export interface IAuthData{
    user:{
        _id:string
        email:string
    } | null
    accessToken:string
}

export const saveTokenToStorage=(accessToken:string)=>{
    Cookies.set('accessToken', accessToken)
}

export const removeTokenFromStorage=()=>{
    Cookies.remove('accessToken')
}

export const saveToStorage=(data:IAuthData)=>{
    saveTokenToStorage(data.accessToken)
    localStorage.setItem('user',JSON.stringify(data.user))
}