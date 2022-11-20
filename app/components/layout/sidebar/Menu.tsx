import { Card, List } from "antd";
import { useRouter } from "next/router";
import { menu } from "./dataMenu";

import styles from './Sidebar.module.scss';

const Menu=()=>{
    const {push}=useRouter();
    return(
        <Card className={styles.card}>
            <List itemLayout='vertical'>
                {menu.map(item=>(
                    <List.Item key={item.link} onClick={()=>push(item.link)} className={styles.itemLink}>
                        <List.Item.Meta title={item.title}/>
                    </List.Item>
                ))}
            </List>
            
        </Card>
    )
}
export default Menu;