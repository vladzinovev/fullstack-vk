import { useOutside } from "@/hooks/useOutside";
import { useSearch } from "@/components/layout/header/search/useSearch";
import { SearchOutlined } from "@ant-design/icons";
import { FC, useState } from "react"
import styles from '../Header.module.css';
import { Card, Skeleton } from "antd";
import UserCard from "@/components/ui/user-card/UserCard";
import cn from 'classnames';

const Search:FC=()=>{
    
    const {data, handleSearch, searchTerm, setSearchTerm, isLoading, visible}=useSearch();

    const hideResult=()=>{
        setSearchTerm('');
        visible.setIsShow(false)
    }
    return (
        <div className={styles.wrapper} ref={visible.ref}>
            <SearchOutlined className="fade"/>
            <input 
                type='text' 
                placeholder='Поиск пользователей' 
                value={searchTerm} 
                onChange={handleSearch} 
                
            />
            {visible.isShow && (
                <Card bordered={false} className={cn(styles.result,'fade')}>
                    {isLoading?(
                        <Skeleton/>
                    ):data?.length ? (
                        data.map(user=>(<UserCard user={user} key={user._id} hideResult={hideResult/>))
                    ):(
                        <div>Пользователей не найдено</div>
                    )}
                </Card>
            )}
        </div>
    )
}
export default Search;