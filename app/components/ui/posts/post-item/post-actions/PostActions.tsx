import { FC } from "react"
import PostCommentsButton from "./post-comments/PostCommentsButton"
import PostLikesButton from "./PostLikesButton"

export interface IPostCommentsButton{
    postId:string
    countComments:number
    toggleComments:()=>void

}

const PostActions:FC<IPostCommentsButton>=({postId, countComments,toggleComments})=>{
    return (
        <div style={{marginTop:15}}>
            <PostLikesButton postId={postId}/>
            <PostCommentsButton postId={postId} countComments={countComments} toggleComments={toggleComments}/>
        </div>
    )
}

export default PostActions