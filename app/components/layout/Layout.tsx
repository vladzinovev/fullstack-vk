import { useAuth } from "@/hooks/useAuth";
import { Col, Row } from "antd";
import Head from "next/head";
import { FC, PropsWithChildren } from "react"
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout:FC<PropsWithChildren<{title:string}>>=({children, title})=>{
    const {user} = useAuth();
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <Row gutter={[5,2]} >
                {user && (
                    <Col span={6}>
                        <Sidebar/>
                    </Col>
                )}
                <Col span={user ? 18 : 24}>
                    {children}
                </Col>
            </Row>
        </>

    )
}
export default Layout;