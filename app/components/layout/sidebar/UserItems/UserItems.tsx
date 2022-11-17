import { useProfile } from "@/hooks/useProfile";
import { Card, List, Skeleton } from "antd";
import { useRouter } from "next/router";
import { FC } from "react";
import { users } from "../dataUser";
import UserItem from "./UserItem";

const UserItems:FC=()=>{
    const {push}=useRouter();
    const {isLoading,data}=useProfile();

    return(
        <Card
            style={{
                padding:2,
                backgroundColor:'#F1F7FA',
                border:'none',
                borderRadius:3,
            }}
        >
            {isLoading?(
                <Skeleton/>
            ):data?.friends?.length ? (
                data.friends?.map(user=>(<UserItem user={user} key={user._id}/>))
            ):(
                <div>Друзей нет</div>
            )}
            
            <List>
                <List.Item style={{cursor:'pointer'}} onClick={()=> push('/conversations')}>
                    <List.Item.Meta title='Сообщения'/>
                </List.Item>
            </List>

        </Card>
    )
}
export default UserItems;