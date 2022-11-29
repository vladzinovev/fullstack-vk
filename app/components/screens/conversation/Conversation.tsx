import Layout from "@/components/layout/Layout";
import { useProfileById } from "@/hooks/useProfileById";
import { ConversationService } from "@/services/conversation.service";
import { Card } from "antd";
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
                
            </Card>
        </Layout>
    )
}
export default Conversation;