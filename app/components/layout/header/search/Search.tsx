import { useOutside } from "@/hooks/useOutside";
import { useSearch } from "@/components/layout/header/search/useSearch";
import { SearchOutlined } from "@ant-design/icons";
import { FC, useState } from "react"
import styles from '../Header.module.css';
import { Card, Skeleton } from "antd";
import UserCard from "@/components/ui/user-card/UserCard";

const Search:FC=()=>{
    
    const {data, handleSearch, searchTerm, isLoading, visible}=useSearch();
    return (
        <div className={styles.wrapper} ref={visible.ref}>
            {!visible.isShow && <SearchOutlined className="fade"/>}
            <input type='text' placeholder='Поиск' onClick={()=>visible.setIsShow(!visible.isShow)}/>
            {visible.isShow && 
                <Card bordered={false}>
                    {isLoading?(
                        <Skeleton/>
                    ):data?.length ? (
                        data.map(user=>(<UserCard user={user} key={user._id}/>))
                    ):(
                        <div>Пользователей не найдено</div>
                    )}
                </Card>}
        </div>
    )
}
export default Search;