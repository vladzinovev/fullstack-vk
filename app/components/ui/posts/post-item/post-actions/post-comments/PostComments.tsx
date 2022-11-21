import { useAuth } from "@/hooks/useAuth";
import { CommentService } from "@/services/comment.service";
import { IComment } from "@/types/comment.interface";
import { Skeleton } from "antd"
import { FC } from "react"
import { useQuery } from "react-query";
import AddComment from "./AddComment"
import CommentItem from "./CommentItem";

import styles from './PostComments.module.scss'

interface IQueryData{refetch:any, data?:IComment[], isLoading:boolean}

const PostComments:FC<{commentsQuery:IQueryData, postId:string}>=({commentsQuery:{refetch, data, isLoading},postId})=>{

    const {user} = useAuth();

    return(
        <div className='fade'>
            {user && <AddComment postId={postId} refetch={refetch}/>}
            {isLoading ? (
                <Skeleton/>
            ): data?.length ? (
                
                <div className={styles.grid}>       
                    {data.map(comment=><CommentItem key={comment.id} comment={comment}/>)}
                </div>
                
                
            ) : (
                <p>Комментариев не найдено!</p>
            )}
        </div>
    )
}
export default PostComments;