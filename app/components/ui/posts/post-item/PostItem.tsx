import { IPost } from "@/types/posts.interface";
import { Card, Image } from "antd";
import { FC } from "react"
import UserInfo from "./UserInfo";
import { useQuery } from "react-query"
import styles from './Post.module.scss';
import PostActions from "./post-actions/PostActions";
import { CommentService } from "@/services/comment.service";
import PostComments from "./post-actions/post-comments/PostComments";

const PostItem:FC<{post:IPost}>=({post})=>{

    const commentsQuery=useQuery(
        ['get comments',post._id],
        ()=>CommentService.getByPostId(post._id),
        {
            enabled:!!post._id,
            select:({data})=>data
        }
    )

    return (
        <Card className={styles.item}>
            <UserInfo postDate={post.createdAt} user={post.user}/>
            <p>{post.content}</p>
            {post.image &&
                <Image width={400} src={post.image} alt=''/>
            }
            <PostActions 
                postId={post._id} 
                countComments={commentsQuery.data?.length || 0}
            />
            <PostComments commentQuery={commentsQuery} />
        </Card>
    )
}
export default PostItem;