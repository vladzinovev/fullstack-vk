import { useAuth } from "@/hooks/useAuth";
import { Col, Row } from "antd";
import Head from "next/head";
import { FC, PropsWithChildren } from "react"
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

import styles from './Layout.module.scss';

const Layout:FC<PropsWithChildren<{title:string}>>=({children, title})=>{
    const {user} = useAuth();
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <Row gutter={[20,30]} className={styles.container}>
                {user && (
                    <Col span={4}>
                        <Sidebar/>
                    </Col>
                )}
                <Col span={user ? 20 : 24}>
                    {children}
                </Col>
            </Row>
        </>

    )
}
export default Layout;