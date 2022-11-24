import { IMenuItem } from "@/types/menu.interface";
import { MessageOutlined } from "@ant-design/icons";
import { List } from "antd";
import Link from "next/link";
import { FC } from "react";

const ListItem:FC<{item:IMenuItem}>=({item})=>{
    return(
        <List.Item>
            <List.Item.Meta title={
                <Link href='/conversations'>
                    <a>
                        <span style={{marginRight:6}}>
                            <item.icon/> 
                            <MessageOutlined/>
                        </span>
                        <span>Сообщения</span>
                    </a>
                </Link>
            }/>
            
        </List.Item>
    )
}
export default ListItem;