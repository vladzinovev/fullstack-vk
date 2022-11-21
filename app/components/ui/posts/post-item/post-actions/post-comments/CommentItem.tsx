import { IComment } from "@/types/comment.interface"
import { FC } from "react"
import UserInfo from "../../UserInfo";
import styles from './PostComments.module.scss'

const CommentItem: FC<{comment:IComment}>=({comment})=>{
    return(
        <div className={styles.commentItem}>
            <UserInfo user={comment.user}/>\
            <p>{comment.message}</p>
        </div>
    )
}
export default CommentItem;