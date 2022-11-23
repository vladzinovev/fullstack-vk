import { useOutside } from "@/hooks/useOutside";
import { UserService } from "@/services/user.service";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "../../../../hooks/useDebounce";

export const useSearch=()=>{
    const visible = useOutside(false);
    const [searchTerm, setSearchTerm] =useState('');
    const debounceSearch=useDebounce(searchTerm,500);
    const {isSuccess,data} = useQuery(
        ['search videos', debounceSearch],
        ()=>UserService.findUsers(debounceSearch),
        {
            select:({data})=>data,
            enabled:!!debounceSearch,
            onSuccess:()=>{visible.setIsShow(true)}
        }
    );
    const handleSearch=(e:ChangeEvent<HTMLInputElement>)=>{
        setSearchTerm(e.target.value)
    }
    return{
        handleSearch, isSuccess, data, searchTerm, visible
    }
}