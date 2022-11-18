import { useAuth } from "@/hooks/useAuth";
import { PostService } from "@/services/post.service";
import Icon from '@ant-design/icons';
import {Alert,Card,Input, Skeleton} from 'antd';
import { errorCatch } from "api/api.utils";
import { FC, useState,KeyboardEvent } from "react"
import { useMutation } from "react-query";

const AddPost:FC=()=>{
    const [content,setContent]=useState('');
    const {user}=useAuth();

    const {mutateAsync, isLoading, error}=useMutation('add Post', ()=>PostService.create({content}),{onSuccess(){
        setContent('')
    }})

    const addPostHandler = async (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter' && user){
            await mutateAsync()
        }
    }


    return (
        <>
            {error && (
                <Alert message={errorCatch(error)} type='error' showIcon/>
            )}
        
            <Card bodyStyle={{borderRadius:'10px'}}>
            
            {isLoading ? <Skeleton/> : 
                <Input
                    placeholder='Расскажи, что у тебя нового'
                    
                    style={{borderRadius:'25px'}}

                    onKeyPress={addPostHandler}
                    onChange={(e)=>setContent(e.target.value)}
                    value={content}
                />
            }    
            </Card>
        </>
    )
}
export default AddPost;