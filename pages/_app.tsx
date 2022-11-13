import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'antd/lib/layout/layout';
import { QueryClient, QueryClientProvider } from 'react-query';

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
    
  ) 
}
