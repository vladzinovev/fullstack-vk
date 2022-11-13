import { axiosClassic } from "api/interceptors"

export const AuthService={
    async LoginGoogle(code:string){
       return axiosClassic.post('/auth/login/google',{
            code
       } )
    }
}