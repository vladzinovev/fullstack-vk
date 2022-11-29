import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { AuthService } from "@/services/auth/auth.service";
import { EditOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, List, Row } from "antd";

import ListItem from "./ListItem";

import styles from './Sidebar.module.scss';

const User=()=>{
    const {user,setUser}=useAuth();
    const {data}= useProfile();
    return(
        <Card className={styles.card}>
            <Row gutter={[5,5]}>
                <Col span={5}>
                    <Avatar alt='' src={user?.avatarPath} size={'large'}/>
                </Col>
                <Col span={19} style={{display:'flex', alignItems:'center'}}>
                    <div>{user?.name}</div>
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

