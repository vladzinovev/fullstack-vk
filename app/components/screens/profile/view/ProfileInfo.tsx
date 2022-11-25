import { IUser } from "@/types/user.interface"
import { Button, Card, Typography } from "antd"
import { FC } from "react"
import Image from "next/image"

const ProfileInfo:FC<{profile:IUser}>=({profile})=>{
    return(
        <Card style={{textAlign:'center'}}>
            <Typography.Title level={1}>
                {profile.name}
            </Typography.Title>
        </Card>
    )
}
export default ProfileInfo;