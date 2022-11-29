import { Card, List } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { menu } from "./dataMenu";
import ListItem from "./ListItem";

import styles from './Sidebar.module.scss';

const Menu=()=>{
    const {push}=useRouter();
    return(
        <Card className={styles.card}>
            <List itemLayout='vertical'>
                {menu.map(item=>(
                    <ListItem key={item.link} item={item} />
                ))}
            </List>
            
        </Card>
    )
}
export default Menu;