import { FC } from "react"
import PostComments from "./post-comments/PostCommentsButton"
import PostLikes from "./PostLikesButton"

const PostActions:FC<{postId:string, countComments:number}>=({postId, countComments})=>{
    return (
        <div style={{marginTop:15}}>
            <PostLikes postId={postId}/>
            <PostComments postId={postId} countComments={countComments}/>
        </div>
    )
}

export default PostActions