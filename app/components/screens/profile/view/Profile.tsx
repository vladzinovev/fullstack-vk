import Layout from "@/components/layout/Layout";
import { UserService } from "@/services/user.service";
import { IUser } from "@/types/user.interface";
import { Card, Col, Row, Spin } from "antd";
import { FC } from "react"
import { useQuery } from "react-query";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

const Profile:FC=()=>{
    const {isLoading,data}=useQuery('get profile', ()=>UserService.getProfile(),{
        select:({data})=>data
    })
    return (
        <Layout title='Моя страница'>
            <Card bordered={false} bodyStyle={{padding:'1rem 0'}}>
                <Row gutter={[20,20]}>
                    <Col span={5}>
                        {isLoading ? <Spin/> : <ProfileAvatar profile={data || {} as IUser}/>}
                    </Col>
                    <Col span={8}>{isLoading ? <Spin/> : <ProfileInfo profile={data || {} as IUser}/>}</Col>
                    <Col span={11}>{isLoading ? <Spin/> : data?._id && <ProfilePosts userId={data._id}/>}</Col>
                </Row>
            </Card>
        </Layout>
    )
}
export default Profile;