
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

import { MdVideoLibrary } from "react-icons/md";

function Nav(){
    return(
        <div className="nav">
            <div className="navigate">
                
                <ul className="ulist">
                    <li><IoMdHome />Home</li>
                    <li><SiYoutubeshorts />Shorts</li>
                    <li><MdSubscriptions />Subcription</li>
                    <li><MdVideoLibrary />You</li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;