import { IUser } from "@/types/user.interface"
import { Button, Card, Col, Row, Typography } from "antd"
import { FC } from "react"
import Image from "next/image"
import { numWord } from "@/components/utils/numWord"
import InfoItem from "./InfoItem"
import CountItem from "./CountItem"

const ProfileInfo:FC<{profile:IUser}>=({profile})=>{
    return(
        <Card style={{textAlign:'center'}}>
            <Typography.Title level={1}>
                {profile.name}
            </Typography.Title>

            <div style={{marginBottom:25}}>

                <InfoItem name="Дата рождения:" value={profile.birthDate}/>
                <InfoItem name="Город:" value={profile.city}/>
                <InfoItem name="Пол:" value={profile.gender}/>

            </div>


            <Row gutter={[15,15]} style={{fontSize:20}}>
                <CountItem number={profile.friends?.length} title="'друг','друга','друзей'"/>
                <CountItem number={profile.friends?.length} title="'пост','поста','постов'"/>
            </Row>

        </Card>
    )
}
export default ProfileInfo;