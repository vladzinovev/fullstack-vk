import { IPost } from "@/types/posts.interface";
import { IUser } from "@/types/user.interface";
import { Avatar } from "antd";
import Link from "next/link";
import { FC } from "react"
import { time2TimeAgo } from "../../../utils/converterData";

const UserInfo:FC<{user:IUser, postDate?:string}>=({user, postDate})=>{
    return (
        <Link href={`/profile/${user._id}`}>
            <a style={{display:'flex', alignItems:'center', textDecoration:'none', color:'#111', marginBottom:12}}>
                <div style={{ position:'relative', marginRight:2, width:50, height:50}}>
                    <Avatar size={46} src={user.avatarPath}/>
                </div>
                <div>
                    <div style={{fontSize:14}}>{user.name}</div>
                    {postDate && <div style={{fontSize:14, opacity:'0.6'}}>{time2TimeAgo(postDate)}</div>}
                </div>
            </a>
        </Link>
    )
}
export default UserInfo;