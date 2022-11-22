import { IUser } from "@/types/user.interface";
import { Avatar, Button, Card, Typography } from "antd";
import { useRouter } from "next/router";
import { FC } from "react"
import styles from './UserCard.module.scss'

const UserCard:FC<{user:IUser}>=({user})=>{

    const {push} = useRouter();
    return (
        <Card>
            <Avatar src={user.avatarPath} alt={user.name}/>
            <Typography.Text><b>{user.name}</b></Typography.Text>
            <Button type='dashed' onClick={()=>push(`/profile/${user._id}`)}>Перейти в профиль</Button>
        </Card>
    )
}

export default UserCard;