import Layout from "@/components/layout/Layout";
import { Card } from "antd";
import { FC } from "react"

const Conversations:FC=()=>{
    return (
        <Layout title='Диалоги'>
            <Card bordered={false} bodyStyle={{padding:'30px 0'}}>
            
            </Card>
        </Layout>
    )
}
export default Conversations;