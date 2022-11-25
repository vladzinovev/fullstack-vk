import { useAuth } from "@/hooks/useAuth";
import { IMediaResponse } from "@/services/media.service";
import { PostService } from "@/services/post.service";
import Icon, { PictureOutlined } from '@ant-design/icons';
import {Image,Alert,Button,Card,Col,Input, Row, Skeleton} from 'antd';
import { errorCatch } from "api/api.utils";
import { FC, useState,KeyboardEvent } from "react"
import { useMutation } from "react-query";
import UploadField from "../upload-field/UploadField";

import styles from './Post.module.scss';

const AddPost:FC<{refetch:any, col?:1|2}>=({refetch,col=1})=>{
    const [content,setContent]=useState('');
    const [image,setImage]=useState<IMediaResponse>({} as IMediaResponse);
    const {user}=useAuth();

    const {mutateAsync, isLoading, error}=useMutation('add Post', ()=>PostService.create({content, image:image.url}),{onSuccess(){
        refetch()
        
        setImage({} as IMediaResponse)
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
        
            <Card style={col==1? {marginTop:15} :{}} className={styles.item}>
            
                {isLoading ? <Skeleton/> : (
                    <Row gutter={[15,15]}>
                        <Col span={col}>
                            <UploadField onChange={e=>setImage(e.value)} Button={
                                <div className="ant-btn ant-btn-dashed">
                                    <PictureOutlined/>
                                </div>}
                            /> 
                            
                        </Col>
                        
                        <Col span={col==1?23:22}>
                            <Input
                                placeholder='Расскажи, что у тебя нового'
                                onKeyPress={addPostHandler}
                                onChange={(e)=>setContent(e.target.value)}
                                value={content}
                            />
                        </Col>
                    </Row>   
                )} 
                {image?.url && (
                    <div style={{marginTop:20}}>
                        <Image src={image.url} alt={image.name} width={200}/>
                    </div>
                    
                )}   
            </Card>
        </>
    )
}
export default AddPost;