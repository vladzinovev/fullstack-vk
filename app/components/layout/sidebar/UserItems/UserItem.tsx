import { IUser } from "@/types/user.interface";
import { Avatar } from "antd";
import Link from "next/link";
import { FC } from "react"

const UserItem:FC<{user:IUser}>=({user})=>{
    return(
        <Link
            key={user._id}
            href={`/profile/${user._id}`}
            style={{
                display:'flex',
                alignItems:'center',
                textDecoration:'none',
                color:'#111',
                marginBottom:12,
            }}
        >

            <a>
                <div 
                    style={{
                        position:'relative',
                        marginRight:2,
                        width:50,
                        height:50
                    }}
                >
                    <Avatar src={user.avatar} alt='' size={46}/>
                    {user.isInNetwork && (
                        <div
                            style={{
                                backgroundColor:'#4FB14F',
                                border:'2px solid #F1F7FA',
                                width:12,
                                height:12,
                                position:'absolute',
                                bottom:0,
                                right:0,
                                borderRadius:'50%'
                            }}
                        />
                    )}
                </div>
                <span style={{fontSize:14}}>{user.name}</span>
            </a>
        
        </Link>
    )
}
export default UserItem;