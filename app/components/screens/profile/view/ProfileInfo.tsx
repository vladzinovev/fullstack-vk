import { IUser } from "@/types/user.interface"
import { Button, Card, Col, Row, Typography } from "antd"
import { FC } from "react"
import Image from "next/image"
import { numWord } from "@/components/utils/numWord"

const ProfileInfo:FC<{profile:IUser}>=({profile})=>{
    return(
        <Card style={{textAlign:'center'}}>
            <Typography.Title level={1}>
                {profile.name}
            </Typography.Title>

            <Row gutter={[15,15]}>
                <Col span={4}>
                    <b>{profile.friends?.length || 0}</b>
                    <div>{numWord(profile.friends?.length || 0,['друг','друга','друзей'])}</div>
                </Col>
            </Row>

        </Card>
    )
}
export default ProfileInfo;