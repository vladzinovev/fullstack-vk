import { useProfile } from "@/hooks/useProfile";
import { Card, List, Skeleton, Typography } from "antd";
import { useRouter } from "next/router";
import { FC } from "react";
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
            <Typography.Title level={5} style={{marginBottom:15}}>Мои друзья</Typography.Title>
            {isLoading?(
                <Skeleton/>
            ):data?.friends?.length ? (
                data.friends?.map(user=>(<UserItem user={user} key={user._id}/>))
            ):(
                <div>Друзей нет</div>
            )}

        </Card>
    )
}
export default UserItems;