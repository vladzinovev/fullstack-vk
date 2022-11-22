import { FC, useState } from "react";
import styles from './Header.module.css';
import Search from "./search/Search";
import logoImg from './vk-logo.png'

const Header:FC=()=>{
    const [isSearchActive, setIsSearchActive] = useState(false);
    return(
        <header className={styles.header}>
            <div className={styles['image-wrapper']}>
                <img src={logoImg.src} alt=''/>
            </div>
            <Search/>
        </header>
    )
}

export default Header;