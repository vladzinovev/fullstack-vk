import { initialPosts } from "@/components/screens/home/posts";
import { FC } from "react"
import PostItem from "./PostItem";

const Posts:FC=()=>{
    return (
        <>
            {initialPosts.map(post=>
                <PostItem post={post} key={post._id}/>    
            )}
        </>
    )
}
export default Posts;