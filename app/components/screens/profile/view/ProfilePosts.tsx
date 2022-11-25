import { IUser } from "@/types/user.interface"
import { Button, Card } from "antd"
import { FC } from "react"
import Image from "next/image"
import { IPost } from "@/types/posts.interface"

const ProfilePosts:FC<{userId:string}>=({userId})=>{
    return(
        <Card style={{textAlign:'center'}}>
            
        </Card>
    )
}
export default ProfilePosts;