import Layout from "@/components/layout/Layout";
import AddPost from "@/components/ui/posts/AddPost";
import Posts from "@/components/ui/posts/Posts";
import { PostService } from "@/services/post.service";
import { FC } from "react"
import { useQuery } from "react-query";

const Home:FC=()=>{

    const {data, isLoading} = useQuery('get all posts', ()=>PostService.getAll(),{select:({data})=>data})
    return (
        <Layout title='Главная'>
            <div>
                <AddPost/>
                <Posts posts={data || []} isLoading={isLoading} />
            </div>
        </Layout>
        
    )
}
export default Home;