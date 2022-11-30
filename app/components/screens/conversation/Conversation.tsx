import Layout from "@/components/layout/Layout";
import UserInfo from "@/components/ui/posts/post-item/UserInfo";
import { useProfileById } from "@/hooks/useProfileById";
import { ConversationService } from "@/services/conversation.service";
import { IUser } from "@/types/user.interface";
import { Avatar, Card, Input, List, Skeleton } from "antd";
import { useRouter } from "next/router";
import { FC } from "react"
import { useQuery } from "react-query";
import cn from 'classnames'
import styles from './Conversation.module.scss';
import { isCurrentUserMessage } from "./conversation.utils";

const Conversation:FC=()=>{
    const {query}=useRouter()
    
    const {data:userTo}=useProfileById(query.with)

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
            <div style={{margin:'1rem 0'}}>
                <Card bodyStyle={{paddingBottom:10}}>
                    <UserInfo user={userTo || {} as IUser}/>
                </Card>
                
                
                <Card id="scrollableDiv" style={{max-height:400, overflow:'auto',marginTop:'1rem'}}>
                    {isLoadingConversation ? <Skeleton/>:(
                        <List
                            dataSource={data?.messages}
                            renderItem={item=>(
                                <List.Item key={item._id} 
                                    style={isCurrentUserMessage(item,userTo?._id)?{justifyContent:'flex-end'}:{}}
                                >
                                    <List.Item.Meta 
                                        avatar={<Avatar src={item.userTo.avatarPath}/>}
                                        title={item.userTo.name}
                                        description={item.text}
                                        className={cn(styles.message,{
                                            [styles.current]: isCurrentUserMessage(item,userTo?._id)
                                            
                                        })}
                                    />
                                    <div>Content</div>
                                </List.Item>
                            )}
                        />
                    ) }
                    
                </Card>
                <Input placeholder="Введите сообщение"/>
            </div>
        </Layout>
    )
}
export default Conversation;