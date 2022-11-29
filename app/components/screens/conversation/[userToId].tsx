import Layout from "@/components/layout/Layout";
import { Card } from "antd";
import { FC } from "react"

const Conversation:FC=()=>{
    return (
        <Layout title='Диалог'>
            <Card bordered={false} bodyStyle={{padding:'30px 0'}}>
                
            </Card>
        </Layout>
    )
}
export default Conversation;