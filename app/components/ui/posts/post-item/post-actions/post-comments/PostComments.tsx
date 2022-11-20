import { Button } from "antd"
import { FC } from "react"

const PostComments:FC<{postId:string}>=({postId})=>{
    return (
        <Button 
            icon={<HeartOutLined style={{color:isActive ? '#40a9ff' : '#CCD9E2'}}/>} 
            type='dashed'
        >
            123
        </Button>
    )

export default PostComments