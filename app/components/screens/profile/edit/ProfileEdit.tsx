import Layout from "@/components/layout/Layout";
import UploadField from "@/components/ui/upload-field/UploadField";
import { useProfile } from "@/hooks/useProfile";
import { IMediaResponse } from "@/services/media.service";
import { UserService } from "@/services/user.service";
import { IUserFields } from "@/types/user.interface";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Typography, DatePicker, Select, Input, Image, notification, Skeleton, Avatar  } from "antd";
import { errorCatch } from "api/api.utils";
import { FC, useState } from "react"
import { useMutation } from "react-query";
import moment from 'moment'
import 'moment/locale/ru'
import locale from 'antd/lib/locale/ru_RU'

const ProfileEdit:FC=()=>{

    const [image, setImage] =useState<IMediaResponse>({} as IMediaResponse)

    const {isLoading,data,refetch}=useProfile(({data})=>{
        setImage({
            name:'default',
            url:data.avatarPath
        })
    })
    

    const {mutateAsync}=useMutation('update profile', 
        (body:IUserFields)=>UserService.updateProfile(body),{
        onError:(error)=>notification.error({
            message: errorCatch(error)
        }),
        onSuccess:async()=>{
            notification.success({
                message:'Профиль успешно обновлен'
            })
            await refetch()
        }
    })

    const onFinish = async (values: IUserFields) => {
        await mutateAsync({...values, avatarPath:image.url, birthDate:moment(values.birthDate).format('DD.MM.YYYY')})
    };
    
    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: errorInfo
        })
    };

    return (
        <Layout title='Редактирование'>
            <Card  bodyStyle={{marginTop:'1rem'}}>
                <Typography.Title level={1} style={{textAlign:'center'}}>
                    Редактирование профиля
                </Typography.Title>
                {isLoading ? (
                    <Skeleton/>
                ) :(
                    <Form
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 5 }}
                        layout="horizontal"
                        initialValues={data ?{...data, birthDate:moment(data.birthDate,'DD.MM.YYYY')} : {}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >

                        <Form.Item name='name' label="Имя" rules={[{required:true, message:'Пожалуйста укажите имя!'}]}>
                            <Input placeholder='Введите имя'/>
                        </Form.Item>

                        <Form.Item name='city' label="Город" rules={[{required:true, message:'Пожалуйста укажите город!'}]}>
                            <Input placeholder='Введите город'/>
                        </Form.Item>

                        <Form.Item name='birthDate' label="Дата рождения" rules={[{required:true, message:'Пожалуйста укажите дату рождения!'}]}>
                            
                            <DatePicker format='DD.MM.YYYY'/>
                        </Form.Item>

                        <Form.Item name='gender' label="Пол" rules={[{required:true, message:'Пожалуйста укажите пол!'}]}>
                            <Select>
                                <Select.Option value="male">мужской</Select.Option>
                                <Select.Option value="female">женский</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <UploadField onChange={setImage} Button={
                                <div className="ant-btn ant-btn-default">
                                    <UploadOutlined/>
                                    <span>Нажмите для загрузки</span>
                                </div>}
                            />
                            {image?.url && <Avatar src={image.url} alt={image.name} size={120} style={{marginBottom:10}}/>}
                        </Form.Item>
                        
                        <Form.Item>
                            <Button type='primary' htmlType="submit" >Обновите профиль</Button>
                        </Form.Item>
                    </Form>
                )}
                
            </Card>
        </Layout>
    )
}
export default ProfileEdit;