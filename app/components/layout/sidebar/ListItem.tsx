import { IMenuItem } from "@/types/menu.interface";
import { MessageOutlined } from "@ant-design/icons";
import { List } from "antd";
import Link from "next/link";
import { FC } from "react";

const ListItem:FC<{item:IMenuItem}>=({item})=>{
    return(
        <List.Item>
            <List.Item.Meta title={
                <Link href={item.link}>
                    <a>
                        <span style={{marginRight:6}}>
                            <item.icon/> 
                            <MessageOutlined/>
                        </span>
                        <span>{item.title}</span>
                    </a>
                </Link>
            }/>
            
        </List.Item>
    )
}
export default ListItem;