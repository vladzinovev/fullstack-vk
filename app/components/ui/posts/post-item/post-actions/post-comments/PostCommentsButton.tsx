import { CommentOutlined } from "@ant-design/icons";
import { Button } from "antd"
import { FC } from "react"

const PostComments:FC<{postId:string,countComments:number}>=({postId,countComments})=>{
    return (
        <Button 
            icon={<CommentOutlined />} 
            type='dashed'
            style={{marginLeft:15}}
        >
            {countComments}
        </Button>
    )
}
export default PostComments;