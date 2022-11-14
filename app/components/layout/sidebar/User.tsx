import { useAuth } from "@/hooks/useAuth";
import { Avatar, Button, Card, Col, Row } from "antd";
import { users } from "./dataUser";

const User=()=>{
    const {user}=useAuth();
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
                    <Avatar alt='' src={users?.avatarPath}/>
                </Col>
                <Col span={9}>
                    <div>{users[0].name || 'Буз имени'}</div>
                </Col>
            </Row>
            <Button type='dashed' onClick={()=>{}}>
                Выйти
            </Button>

        </Card>
    )
    
    
}
export default User;

