import { CommentOutlined } from "@ant-design/icons";
import { Button } from "antd"
import { FC } from "react"
import { IPostCommentsButton } from "../PostActions";

const PostComments:FC<IPostCommentsButton>=({postId,countComments,toggleComments})=>{
    return (
        <Button 
            icon={<CommentOutlined />} 
            type='dashed'
            style={{marginLeft:15}}
            onClick={toggleComments}
        >
            <span>{countComments}</span>
        </Button>
    )
}
export default PostComments;