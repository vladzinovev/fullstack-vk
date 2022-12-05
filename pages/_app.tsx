import 'antd/dist/antd.css';
import '../app/assets/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'antd/lib/layout/layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from '@/providers/AuthProvider';

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  ) 
}
