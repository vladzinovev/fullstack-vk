import axios from 'axios';
import Cookies from 'js-cookie';

export const getContentType=()=>({
    'Content-Type':'application/json',
})

//нужен чтобы дедлать запросы без авторизации
export const axiosClassic=axios.create({
    //baseURL:IS_PRODUCTION ? API_SERVER_URL :API_URL,
    //в режиме разрабоки
    baseURL:`${process.env.APP_URL}/api`,
    headers: getContentType()
})

//нужен делать запросы с авторизацией
const instance=axios.create({
    //в режиме разрабоки
    baseURL:`${process.env.APP_URL}/api`,
    headers: getContentType()
})

//когда кидаем запрос на сервер
instance.interceptors.request.use(config=>{
    //получаем свои куки
    const accessToken=Cookies.get('accessToken');

    if(config.headers && accessToken){
        config.headers.Authorization=`Bearer ${accessToken}`;
    }
    return config;
})

export default instance;
//когда получаем ответ с сервера
instance.interceptors.response.use()