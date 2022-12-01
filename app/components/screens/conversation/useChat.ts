import {DefaultEventsMap} from '@socket.io/component-emitter'
import { useEffect,useState } from 'react'

import io, { Socket } from 'socket.io-client'
import { IConversation, IDeleteMessageFields, IMessageFields } from '@/types/message.interface'

const SERVER_URL = 'http://localhost:80'

// хук принимает название комнаты
export const useChat = (conversationId?:string | string[]) => {
    // локальное состояние для сообщений
    const [conversation, setConversation] = useState<IConversation>({} as IConversation)

    const [isConnected,setIsConnected]=useState(false);

    const [socket,setSocket]=useState<Socket<DefaultEventsMap,DefaultEventsMap>|null>(null)

    useEffect(() => {
        if(!conversationId) return
    // создаем экземпляр сокета, передаем ему адрес сервера
    // и записываем объект с названием комнаты в строку запроса "рукопожатия"
    // socket.handshake.query.roomId
        const newSocket = io(SERVER_URL, {
            query: { conversationId }
        })

        setSocket(newSocket)

        return () => {
            newSocket.close()
        }
    }, [conversationId, setSocket])

    useEffect(() => {
        if(!socket ) return

        // отправляем запрос на получение сообщений
        socket.emit('message:get',{conversationId})

        // обрабатываем получение сообщений
        socket.on('conversation', conversation=>{
            // обновляем массив сообщений
            setConversation(conversation)
        })

        socket.on('connect', ()=>{
            socket.emit('joinRoom',{conversationId})
        })

        socket.on('joinedRoom', ()=>{
            setIsConnected(true)
        })

        socket.on('leftRoom', ()=>{
            setIsConnected(false)
        })

        return () => {
            socket.on('connect', ()=>{
                socket.emit('leaveRoom',{conversationId})
            })
            // при размонтировании компонента выполняем отключение сокета
            socket.disconnect()
        }
    }, [conversationId, socket])

    const sendMessage = (body:IMessageFields) => {
        socket?.emit('message:add', body)
    }

    // функция удаления сообщения по id
    const removeMessage = (body:IDeleteMessageFields) => {
        socket?.emit('message:delete', body)
    }

    // хук возвращает пользователей, сообщения и функции для отправки удаления сообщений
    return { conversation, sendMessage, removeMessage,isConnected }
}