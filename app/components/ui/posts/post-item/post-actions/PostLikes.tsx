import { Button } from "antd"
import { HeartOutLined, HeartFilled } from "@antd-design/icons";
import { FC } from "react"
import { useAuth } from "@/hooks/useAuth";
import { useQuery,useMutation } from "react-query";
import { LogLikesService } from "@/services/log-likes.service";

const PostLikes:FC<{postId:string}>=({postId})=>{
    const {user}=useAuth();

    //общее количество лайков
    const {data:likes, refetch}=useQuery(
        ['get Likes' , postId],
        ()=>LogLikesService.checkExists(postId),
        {
            enabled:!!postId && !!user,
            select:({data})=>data
        }
    )

    const {data:isLiked, refetch:refetchLikeStatus}=useQuery(
        ['check like by post id' , postId],
        ()=>LogLikesService.checkExists(postId),
        {
            enabled:!!postId && !!user,
            select:({data})=>data
        }
    )

    const {mutate}=useMutation(['toggle like',postId,
        ()=> LogLikesService.toggleLike(postId)],
        {
            onSuccess:async ()=>{
                await refetchLikeStatus()
                await refetch()
            }
        }
    )

    return (
        <Button 
            icon={
                isLiked ? <HeartFilled style={{color:'#40a9ff'}} /> : <HeartOutLined/> 
            }
            type='dashed'
            onClick={()=>mutate()}
        >
            <span>{likes}</span>
        </Button>
    )
}

export default PostLikes