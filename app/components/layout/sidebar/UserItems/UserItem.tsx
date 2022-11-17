import { IUser } from "@/types/user.interface";
import { Avatar } from "antd";
import Link from "next/link";
import { FC } from "react"

const UserItem:FC<{user:IUser}>=({user})=>{
    return(
        <Link
            key={user._id}
            href={`/profile/${user._id}`}
        >

            <a
                style={{
                    display:'flex',
                    alignItems:'center',
                    textDecoration:'none',
                    color:'#111',
                    marginBottom:12,
                }}
            >   
                <div 
                    style={{
                        position:'relative',
                        marginRight:2,
                        width:50,
                        height:50
                    }}
                >
                    <Avatar src={user.avatarPath} alt='' size={46}/>
                    
                </div>
                <span style={{fontSize:14}}>{user.name}</span>
            </a>
        
        </Link>
    )
}
export default UserItem;