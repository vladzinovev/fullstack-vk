import { IPost } from "@/types/posts.interface";
import { Card, Image } from "antd";
import { FC, useState } from "react"
import UserInfo from "./UserInfo";
import { useQuery } from "react-query"
import styles from '../Post.module.scss';
import PostActions from "./post-actions/PostActions";
import { CommentService } from "@/services/comment.service";
import PostComments from "./post-actions/post-comments/PostComments";
import DeletePostButton from "./post-actions/DeletePostButton";
import { useAuth } from "@/hooks/useAuth";

const PostItem:FC<{post:IPost,refetchPosts:any}>=({post,refetchPosts})=>{

    const {user} = useAuth();

    const commentsQuery=useQuery(
        ['get comments',post._id],
        ()=>CommentService.getByPostId(post._id),
        {
            enabled:!!post._id,
            select:({data})=>data
        }
    )

    const [isOpenComment, setIsOpenComment] = useState(false);

    return (
        <Card className={styles.item} bodyStyle={{transition:'all .4s easy-in-out'}}>
            <UserInfo postDate={post.createdAt} user={post.user}/>
            <p>{post.content}</p>
            {post.image &&
                <Image width={400} src={post.image} alt=''/>
            }
            <PostActions 
                postId={post._id} 
                countComments={commentsQuery.data?.length || 0}
                toggleComments={()=>setIsOpenComment(!isOpenComment)}
            />
            {isOpenComment && 
                <PostComments commentsQuery={commentsQuery} postId={post._id}/>
            }

            {post.user._id == user?._id && 
                <DeletePostButton postId={post._id} refetch={refetchPosts} />
            }
        </Card>
    )
}
export default PostItem;