import { IPost } from "@/types/posts.interface";
import { Card, Image } from "antd";
import { FC } from "react"
import UserInfo from "./UserInfo";

import styles from './Post.module.scss';
import PostActions from "./post-actions/PostActions";

const PostItem:FC<{post:IPost}>=({post})=>{
    return (
        <Card className={styles.item}>
            <UserInfo post={post}/>
            <p>{post.content}</p>
            {post.image &&
                <Image width={400} src={post.image} alt=''/>
            }
            <PostActions postId={post._id} />
        </Card>
    )
}
export default PostItem;