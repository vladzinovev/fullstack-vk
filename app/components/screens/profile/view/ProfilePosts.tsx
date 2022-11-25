import { IUser } from "@/types/user.interface"
import { Button, Card } from "antd"
import { FC } from "react"
import Image from "next/image"
import { IPost } from "@/types/posts.interface"
import { useQuery } from "react-query"
import { PostService } from "@/services/post.service"
import AddPost from "@/components/ui/posts/AddPost"
import Posts from "@/components/ui/posts/Posts"

const ProfilePosts:FC<{userId:string}>=({userId})=>{

    const {data, isLoading,refetch} = useQuery('get post by user id', ()=>PostService.getByUserId(userId),{select:({data})=>data, enabled:!!userId})
    

    return(
        <div>
            <AddPost col={2} refetch={refetch}/>
            <Posts posts={data || []} isLoading={isLoading} refetchPosts={refetch}/>
        </div>
    )
}
export default ProfilePosts;