import { SearchOutlined } from "@ant-design/icons";
import { FC, useState } from "react"
import styles from '../Header.module.css';

const Search:FC=()=>{
    const [isSearchActive, setIsSearchActive] = useState(false);
    return (
        <div className={styles.wrapper}>
            {!isSearchActive && <SearchOutlined/>}
            <input type='text' placeholder='Поиск' onClick={()=>setIsSearchActive(true)}/>
        </div>
    )
}
export default Search;