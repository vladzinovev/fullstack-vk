import { PostService } from "@/services/post.service";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { errorCatch } from "api/api.utils";
import { FC } from "react"
import { useMutation } from "react-query";

const DeletePostButton:FC<{postId:string, refetch:any}>=({postId, refetch})=>{

    const {mutate, isLoading}=useMutation(
        'remove Post', 
        ()=>PostService.delete(postId),
        {
            onSuccess(){
                refetch().then(()=>{
                    notification.success({
                        message: 'Пост успешно удален!'
                    })
                })
                
            },
            onError(error){
                notification.error({
                    message: errorCatch(error)
                })
            }
        }
    )

    return(
        <Button 
            type='text' 
            style={{position:'absolute', top:0, right:0, opacity:0.5}}
            title='Удалить пост'
            onClick={()=>mutate()}
            disabled={isLoading}
        >
            <DeleteOutlined style={{color:'#F8466E'}}/>
        </Button>
    )
}
export default DeletePostButton;