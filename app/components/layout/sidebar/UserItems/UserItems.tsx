import { useProfile } from "@/hooks/useProfile";
import { Card, List, Skeleton } from "antd";
import { useRouter } from "next/router";
import { FC } from "react";
import { users } from "../dataUser";
import UserItem from "./UserItem";
import styles from '../Sidebar.module.scss';
import Link from "next/link";
import { MessageOutlined } from "@ant-design/icons";
import ListItem from "../ListItem";

const UserItems:FC=()=>{
    const {push}=useRouter();
    const {isLoading,data}=useProfile();

    return(
        <Card className={styles.card}>
            {isLoading?(
                <Skeleton/>
            ):data?.friends?.length ? (
                data.friends?.map(user=>(<UserItem user={user} key={user._id}/>))
            ):(
                <div>Друзей нет</div>
            )}
            
            <List itemLayout='vertical'> 
                <ListItem item={{
                    title:'Сообщение',
                    icon:MessageOutlined,
                    link:'./conversations',
                }}/>
                
            </List>

        </Card>
    )
}
export default UserItems;