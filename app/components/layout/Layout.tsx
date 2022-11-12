import { useAuth } from "@/hooks/useAuth";
import { Row } from "antd";
import { FC, PropsWithChildren } from "react"

const Layout:FC<PropsWithChildren<unknown>>=({children})=>{
    const {user} = useAuth();
    return (
        <>
            <Header/>
            <Row gutter={[5,2]} >
                {user && (
                    <Col span={3}>
                        <Sidebar/>
                    </Col>
                )}
                <Col span={user ? 9 : 12}>
                    {children}
                </Col>
            </Row>
        </>

    )
}
export default Layout;