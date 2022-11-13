import Layout from "@/components/layout/Layout";
import AddPost from "@/components/ui/posts/AddPost";
import Posts from "@/components/ui/posts/Posts";
import { FC } from "react"

const Home:FC=()=>{
    return (
        <div>
            <AddPost/>
            <Posts/>
        </div>
    )
}
export default Home;