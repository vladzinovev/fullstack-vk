import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { AuthService } from "@/services/auth/auth.service";
import { CheckCircleTwoTone, EditOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, List, Row } from "antd";

import ListItem from "./ListItem";

import styles from './Sidebar.module.scss';

const User=()=>{
    const {setUser}=useAuth();
    const {data}= useProfile();
    return(
        <Card className={styles.card}>
            <Row gutter={[5,5]}>
                <Col span={5}>
                    <Avatar alt='' src={data?.avatarPath} size={'large'}/>
                </Col>
                <Col span={19} style={{display:'flex', alignItems:'center'}}>
                    <div>
                        {data?.name}
                        {data?.isVerified && (
                        <CheckCircleTwoTone style={{color:'#5B9CE6', opacity:'0.8', marginLeft:5}}/>
                    )}
                </div>
                </Col>
            </Row>

            <List style={{marginTop:'1rem'}}>
                <ListItem item={{
                    link: '/profile/edit',
                    title:'Редактирование профиля',
                    icon: EditOutlined
                }}/>
            </List>

            <Button style={{marginTop:'1rem'}} type='dashed' onClick={()=>{
                AuthService.logout()
                setUser && setUser(null)
            }}>
                Выйти
            </Button>

            
        </Card>
    )
    
    
}
export default User;

