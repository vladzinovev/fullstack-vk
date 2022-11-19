import { IPost } from "@/types/posts.interface";
import { Card, Image } from "antd";
import { FC } from "react"
import UserInfo from "./UserInfo";

import styles from './Post.module.scss';

const PostItem:FC<{post:IPost}>=({post})=>{
    return (
        <Card className={styles.item}>
            <UserInfo post={post}/>
            <p>{post.content}</p>
            {post.image &&
                <Image width={400} src={post.image} alt=''/>
            }
            <PostActions/>
        </Card>
    )
}
export default PostItem;