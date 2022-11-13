import { FC } from "react";
import Menu from "./Menu";
import User from "./User";
import UserItems from "./UserItems/UserItems";

const Sidebar:FC=()=>{
    return(
        <div>
            <User/>
            <UserItems/>
            <Menu/>
        </div>
    )
}
export default Sidebar;