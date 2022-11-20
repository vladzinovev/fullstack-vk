import { FC } from "react"
import PostComments from "./PostComments"
import PostLikes from "./PostLikes"

const PostActions:FC<{postId:string}>=({postId})=>{
    return (
        <div style={{marginTop:15}}>
            <PostLikes postId={postId}/>
            <PostComments postId={postId}/>
        </div>
    )
}

export default PostActions