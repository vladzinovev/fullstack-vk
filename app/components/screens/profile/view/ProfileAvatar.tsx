import { IUser } from "@/types/user.interface"
import { Button, Card } from "antd"
import { FC } from "react"
import Image from "next/image"
import { useAuth } from "@/hooks/useAuth"
import { useProfile } from "@/hooks/useProfile"
import { useMutation } from "react-query"
import { UserService } from "@/services/user.service"
import { ConversationService } from "@/services/conversation.service"
import { useRouter } from "next/router"

const ProfileAvatar:FC<{profile:IUser}>=({profile})=>{
    const {user}=useAuth()
    const isMyProfile=user?._id==profile._id;
    const {data, refetch} = useProfile();

    const isExistsFriend=data?.friends?.some(
        friend=>friend._id===profile._id
    )

    const {mutate} = useMutation(
        'toogle friend',
        ()=>UserService.toggleFriend(profile._id),
        {
            onSuccess:async ()=>{
                await refetch()
            }
        }
    )

    const {push} =useRouter()

    const {mutate:createConversation} = useMutation(
        'create conversation',
        ()=>ConversationService.create(),
        {
            onSuccess:async ({data})=>{
                await push(`/conversation/${data._id}?with=${profile._id}`)
            }
        }
    )

    return(
        <Card style={{textAlign:'center'}}>
            {profile.avatarPath &&(
                <Image
                    src={profile.avatarPath || ''}
                    alt={profile.name}
                    width={300}
                    height={300}
                    quality={90}
                    layout='responsive'
                />
            )}
            {/* {user?._id!==profile._id && 
                <>
                    <Button type='dashed' style={{margin:'10px 0'}}>Добавить в друзья</Button>
                    <Button type='primary'>Написать сообщение</Button>
                </>
            } */}
            <Button type='dashed' style={{margin:'10px 0'}} disabled={isMyProfile}
                onClick={()=> mutate()}
            >
                {isExistsFriend ? 'Удалить из друзей' : 'Добавить в друзья'}
            </Button>
            <Button type='primary'>Написать сообщение</Button>
            
        </Card>
    )
}
export default ProfileAvatar;