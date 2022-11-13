import { Card, List } from "antd";
import { useRouter } from "next/router";
import { menu } from "./dataMenu";

const Menu=()=>{
    const {push}=useRouter();
    return(
        <Card
            bodyStyle={{
                padding:2,
                backgroundColor:'#F1F7FA',
                border:'none',
                borderRadius:3,
                marginTop:5,
                marginBottom:10,
            }}
        >
            <List itemLayout='vertical'>
                {menu.map(item=>(
                    <List.Item key={item.link} onClick={()=>push(item.link)} style={{cursor:'pointer'}}>
                        <List.Item.Meta title={item.title}/>
                    </List.Item>
                ))}
            </List>
            
        </Card>
    )
}
export default Menu;