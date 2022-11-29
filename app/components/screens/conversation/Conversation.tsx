import Layout from "@/components/layout/Layout";
import UserInfo from "@/components/ui/posts/post-item/UserInfo";
import { useProfileById } from "@/hooks/useProfileById";
import { ConversationService } from "@/services/conversation.service";
import { IUser } from "@/types/user.interface";
import { Avatar, Card, List, Skeleton } from "antd";
import { useRouter } from "next/router";
import { FC } from "react"
import { useQuery } from "react-query";

const Conversation:FC=()=>{
    const {query}=useRouter()
    
    const {isLoading,data:userTo}=useProfileById(query.with)

    const conversationId=query?.id

    const {isLoading:isLoadingConversation,data}=useQuery(
        ['get conversation',conversationId], 
        ()=>ConversationService.get(String(conversationId)),
        {
            select:({data})=>data,
            enabled:!!conversationId
        }
    )
    return (
        <Layout title='Диалог'>
            <Card bordered={false} bodyStyle={{padding:'30px 0'}}>
                {isLoading &&
                    <UserInfo user={userTo || {} as IUser}/>
                }
                <div id="scrollableDiv" style={{height:400, overflow:'auto', padding:'0 16px', border:'1px solid rgba(140,140,140, 0.35)'}}>
                    {isLoadingConversation ? <Skeleton/>: }
                    <List
                        dataSource={data?.messages}
                        renderItem={item=>(
                            <List.Item key={item._id}>
                                <List.Item.Meta 
                                    avatar={<Avatar src={item.userTo.avatarPath}/>}
                                    title={<a href='https://dffff'>{item.userTo.name}</a>}
                                    description={item.userTo.email}
                                />
                                <div>Content</div>
                            </List.Item>
                        )}
                    />
                </div>
            </Card>
        </Layout>
    )
}
export default Conversation;