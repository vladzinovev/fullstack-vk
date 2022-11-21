import { useAuth } from "@/hooks/useAuth";
import { CommentService } from "@/services/comment.service";
import { Skeleton } from "antd"
import { FC } from "react"
import { useQuery } from "react-query";
import AddComment from "./AddComment"
import CommentItem from "./CommentItem";

import styles from './PostComments.module.scss'

const PostComments:FC<{postId:string}>=({postId})=>{

    const {user} = useAuth();

    const {refetch, data, isLoading}=useQuery(
        ['get comments',postId],
        ()=>CommentService.getByPostId(postId),
        {
            select:({data})=>data
        }
    )
    return(
        <div>
            {user && <AddComment postId={postId} refetch={refetch}/>}
            {isLoading ? (
                <Skeleton/>
            ): data?.length ? (
                <>
                    <div className={styles.grid}>       
                        {data.map(comment=><CommentItem key={comment._id} comment={comment}/>)}
                    </div>
                </>
                
            ) : (
                <p>Комментариев не найдено!</p>
            )}
        </div>
    )
}
export default PostComments;