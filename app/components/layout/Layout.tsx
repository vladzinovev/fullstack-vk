import { useAuth } from "@/hooks/useAuth";
import { Col, Row } from "antd";
import { FC, PropsWithChildren } from "react"
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout:FC<PropsWithChildren<unknown>>=({children})=>{
    const {user} = useAuth();
    return (
        <>
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