import { Card, List } from "antd";
import { useRouter } from "next/router";
import { FC } from "react";
import { users } from "../dataUser";
import UserItem from "./UserItem";

const UserItems:FC=()=>{
    const {push}=useRouter();

    return(
        <Card
            style={{
                padding:2,
                backgroundColor:'#F1F7FA',
                border:'none',
                borderRadius:3,
            }}
        >
            {users.map(user=>(
                <UserItem user={user} key={user._id}/>
            ))}
            <List>
                <List.Item onClick={()=> push('/conversations')}>
                    <List.Item.Meta title='Сообщения'/>
                </List.Item>
            </List>

        </Card>
    )
}
export default UserItems;