import Layout from "@/components/layout/Layout";
import UserInfo from "@/components/ui/posts/post-item/UserInfo";
import { useProfileById } from "@/hooks/useProfileById";
import { IUser } from "@/types/user.interface";
import { Avatar, Button, Card, Input, List} from "antd";
import { useRouter } from "next/router";
import { FC, useState,KeyboardEvent } from "react"
import cn from 'classnames'
import styles from './Conversation.module.scss';
import { isCurrentUserMessage } from "./conversation.utils";
import { useChat } from "./useChat";
import { useAuth } from "@/hooks/useAuth";
import { DeleteOutlined } from "@ant-design/icons";

const Conversation:FC=()=>{
    const {query}=useRouter()
    
    const {data:userTo}=useProfileById(query.with)

    const conversationId=query?.id

    const { conversation, sendMessage, removeMessage }=useChat(conversationId)
    /* const {isLoading:isLoadingConversation,data}=useQuery(
        ['get conversation',conversationId], 
        ()=>ConversationService.get(String(conversationId)),
        {
            select:({data})=>data,
            enabled:!!conversationId
        }
    ) */

    const [message, setMessage] =useState('');
    const {user}=useAuth();
    const addMessageHandler = async (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
            sendMessage({conversationId:String(conversationId),text: message, userFromId:String(user?._id),userToId:String(userTo?._id)})
        }
    }
    const removeMessageHandler = async (messageId:string)=>{
        removeMessage({
            conversationId:String(conversationId),
            messageId
        })
    }

    return (
        <Layout title='Диалог'>
            <div style={{margin:'1rem 0'}}>
                <Card bodyStyle={{paddingBottom:10}}>
                    <UserInfo user={userTo || {} as IUser}/>
                </Card>
                
                
                <Card id="scrollableDiv" style={{maxHeight:400, overflow:'auto',marginTop:'1rem'}}>
                    
                    <List
                        dataSource={conversation.messages}
                        renderItem={item=>(
                            <List.Item 
                                key={item._id} 
                                className={styles.item}
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
                                    {isCurrentUserMessage(item,userTo?._id) && 
                                        <Button 
                                            type='text' 
                                            style={{position:'absolute', bottom:10, right:47, opacity:0.5}}
                                            title='Удалить пост'
                                            onClick={()=>removeMessageHandler(item._id)}
                                        >
                                            <DeleteOutlined style={{color:'#F8466E'}}/>
                                        </Button>
                                    }
                                    
                            </List.Item>
                        )}
                    />
                    
                    
                </Card>
                <Input 
                    placeholder="Введите сообщение" 
                    value={message} 
                    onChange={e=>setMessage(e.target.value)}
                    onKeyPress={addMessageHandler}
                />
            </div>
        </Layout>
    )
}
export default Conversation;