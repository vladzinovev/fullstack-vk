import { UserService } from "@/services/user.service"
import { useQuery } from "react-query"

export const useProfile=()=>{
    const {isLoading,data}=useQuery('get profile', ()=>UserService.getProfile(),{
        select:({data})=>data
    })
    return {isLoading, data}
}