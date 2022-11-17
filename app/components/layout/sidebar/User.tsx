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
            <Row gutter={[5,5]}>
                <Col span={5}>
                    <Avatar alt='' src={user?.avatarPath} size={'large'}/>
                </Col>
                <Col span={19} style={{display:'flex', alignItems:'center'}}>
                    <div>{user?.name}</div>
                </Col>
            </Row>
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

