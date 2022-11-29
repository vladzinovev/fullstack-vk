import Layout from "@/components/layout/Layout";import UserCard from "@/components/ui/user-card/UserCard";
import { useProfile } from "@/hooks/useProfile";
import { Typography, Card, Skeleton } from "antd";
import { FC } from "react"

const Friends:FC=()=>{

    const {isLoading, data}=useProfile()
    return (
        <Layout title='Друзья'>
            <Card bordered={false} bodyStyle={{padding:'30px 0'}}>
                <Typography.Title level={1} style={{textAlign:'center'}}>
                    Мои Друзья
                </Typography.Title>

                {isLoading?(
                    <Skeleton/>
                ):data?.friends?.length ? (
                    data.friends?.map(user=>(<UserCard user={user} key={user._id}/>))
                ):(
                    <div>Друзей нет</div>
                )}
            </Card>
        </Layout>
    )
}
export default Friends;