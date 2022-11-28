import Layout from "@/components/layout/Layout";
import UploadField from "@/components/ui/upload-field/UploadField";
import { useProfile } from "@/hooks/useProfile";
import { IMediaResponse } from "@/services/media.service";
import { UserService } from "@/services/user.service";
import { IUserFields } from "@/types/user.interface";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Typography, DatePicker, Select, Input, Image, notification  } from "antd";
import { errorCatch } from "api/api.utils";
import { FC, useState } from "react"
import { useMutation } from "react-query";

const ProfileEdit:FC=()=>{

    const [image, setImage] =useState<IMediaResponse>({} as IMediaResponse)

    useProfile(({data})=>{
        setImage({
            name:'default',
            url:data.avatarPath
        })
    })
    

    const {mutateAsync}=useMutation('update profile', (body:IUserFields)=>UserService.updateProfile(body),{
        onError:(error)=>notification.error({
            message: errorCatch(error)
        })
    })

    const onFinish = async (values: IUserFields) => {
        await mutateAsync(values)
    };
    
    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: errorInfo
        })
    };

    return (
        <Layout title='Редактирование'>
            <Card  bodyStyle={{padding:'30px 0'}}>
                <Typography.Title level={1} style={{textAlign:'center'}}>
                    Редактирование профиля
                </Typography.Title>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >

                    <Form.Item label="Имя" rules={[{required:true, message:'Пожалуйста укажите имя!'}]}>
                        <Input placeholder='Введите имя'/>
                    </Form.Item>

                    <Form.Item label="Город" rules={[{required:true, message:'Пожалуйста укажите город!'}]}>
                        <Input placeholder='Введите город'/>
                    </Form.Item>

                    <Form.Item label="Дата рождения" rules={[{required:true, message:'Пожалуйста укажите дату рождения!'}]}>
                        <DatePicker />
                    </Form.Item>

                    <Form.Item label="Пол" rules={[{required:true, message:'Пожалуйста укажите пол!'}]}>
                        <Select>
                            <Select.Option value="male">мужской</Select.Option>
                            <Select.Option value="female">женский</Select.Option>
                        </Select>
                    </Form.Item>

                    <div>
                        <UploadField onChange={setImage} Button={<Button icon={<UploadOutlined/>}>Нажмите для загрузки</Button>}/>
                        {image?.url && <Image src={image.url} alt={image.name}/>}
                    </div>

                    <UploadField onChange={setImage} Button={<Button icon={<UploadOutlined/>}>Обновите профиль</Button>}/>
                    
                    <Form.Item>
                        <Button>Button</Button>
                    </Form.Item>
                </Form>
            </Card>
        </Layout>
    )
}
export default ProfileEdit;