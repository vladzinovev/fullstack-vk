import { FC, useState } from "react";
import styles from './Header.module.css';

const Header:FC=()=>{
    const [isSearchActive, setIsSearchActive] = useState(false);
    return(
        <header className={styles.header}>
            <div className={styles['image-wrapper']}>
                <img src={logoImg.src} alt=''/>
            </div>
            <div className={styles.wrapper}>
                <input type='text' placeholder='Поиск' onClick={()=>setIsSearchActive(true)}/>
            </div>
        </header>
    )
}

export default Header;