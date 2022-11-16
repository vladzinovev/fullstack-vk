import { useAuth } from "@/hooks/useAuth";
import { AuthService } from "@/services/auth/auth.service";
import { Avatar, Button, Card, Col, Row } from "antd";
import { users } from "./dataUser";

const User=()=>{
    const {user,setUser}=useAuth();
    return(
        <Card 
            style={{
                padding:2,
                backgroundColor:'#F1F7FA',
                border:'none',
                borderRadius:3,
                marginBottom:10, 
            }}
        >
            <Row>
                <Col span={3}>
                    <Avatar alt='' src={user?.avatarPath}/>
                </Col>
                <Col span={9}>
                    <div>{user?.name || 'Буз имени'}</div>
                </Col>
            </Row>
            <Button type='dashed' onClick={()=>{
                AuthService.logout()
                setUser && setUser(null)
            }}>
                Выйти
            </Button>

        </Card>
    )
    
    
}
export default User;

