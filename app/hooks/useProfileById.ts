import { UserService } from "@/services/user.service"
import { useQuery } from "react-query"

export const useProfileById=(userId?:string | string)=>{
    return useQuery(
        ['get user',userId], 
        ()=>UserService.getUser(String(userId)),
        {
            select:({data})=>data,
            enabled:!!userId
        }
    )
}