
import { CommentService } from "@/services/comment.service";
import { ICommentFields } from "@/types/comment.interface";
import { SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import { FC } from "react"
import { useMutation } from "react-query";
import styles from '../../../layout/header/auth-form/AuthForm.module.scss'


const AddComment:FC<{postId:string, refetch:any}>=({postId,refetch})=>{

    const {mutateAsync}=useMutation('add comment', (data:ICommentFields)=>CommentService.create({...data,postId}),{
        onSuccess(data){
            //reset()
            refetch()
        }
    })


    const onFinish = async (values: ICommentFields) => {
        await mutateAsync(values)
    };
    
    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: errorInfo
        })
    };

    return(
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{position:'relative'}}
        >
            <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Message is required!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit' style={{position:'absolute', right:0,top:0}} icon={<SendOutlined/>}/>
            </Form.Item>

        </Form>
    )
}
export default AddComment;