import { IUser } from "@/types/user.interface"
import { Button, Card } from "antd"
import { FC } from "react"
import Image from "next/image"

const ProfileAvatar:FC<{profile:IUser}>=({profile})=>{
    return(
        <Card style={{textAlign:'center'}}>
            {profile.avatarPath &&(
                <Image
                    src={profile.avatarPath || ''}
                    alt={profile.name}
                    width={300}
                    height={300}
                    quality={90}
                    layout='responsive'
                />
            )}
            
            <Button type='dashed' style={{margin:'10px 0'}}>Добавить в друзья</Button>
            <Button type='primary'>Написать сообщение</Button>
        </Card>
    )
}
export default ProfileAvatar;