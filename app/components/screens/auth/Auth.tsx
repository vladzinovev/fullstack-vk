import { Button, Typography, Image, Card } from "antd"
import { FC, useEffect } from "react"
import { useAuth } from "../../../hooks/useAuth"
import GoogleLogo from './google.svg';
import styles from './Auth.module.scss';
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";

const Auth:FC=()=>{
    
    const {user} = useAuth();
    const {push}=useRouter();

    useEffect(()=>{
        if(user) push('/').then((r)=>r)
    },[push,user])
    
    return(
        
        <Layout title='Диалоги'>
            <Card className={styles.form}>
                <Typography.Title>Google login</Typography.Title>
                <Button 
                    type='primary'
                    icon={
                        <Image
                            src={GoogleLogo.src}
                            alt='google'
                            width={24}
                            height={24}
                            priority
                        />
                        
                    }
                    size='large'
                    onClick={()=>push(`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fgoogle-auth&scope=email%20profile&client_id=${process.env.GOOGLE_CLIENT_ID}&flowName=GeneralOAuthFlow`)}
                >
                    Sign in with google
                </Button>
            </Card>
        </Layout>
    )
}
export default Auth;