import { initialPosts } from "@/components/screens/home/posts";
import { IPost } from "@/types/posts.interface";
import { Alert, Skeleton } from "antd";
import { FC } from "react"
import PostItem from "./post-item/PostItem";

const Posts:FC<{posts:IPost[]; isLoading:boolean}>=(posts,isLoading)=>{
    return (
        <>
            {isLoading ? (
                <Skeleton/>
            ) :  posts?.length ? (
                    posts.map(post=><PostItem post={post} key={post._id}/>)
                ) : (<Alert message='Постов не найдено' style={{marginTop:17}}/>)
            }
        </>
    )
}
export default Posts;