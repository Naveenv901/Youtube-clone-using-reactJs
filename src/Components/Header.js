import { FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


 
 function Header(){
    return(
        <div className="head">
            
                
            <div className="first"> 
            <div className="mn">
            <div className="menu"></div>
                <div className="menu"></div>
                <div className="menu"></div>
                </div>
            <FaYoutube className="yt"/>
               <p>Youtube</p>
                </div>
            <div className="search">
                <input 
                 placeholder="Search..."
                 className="searchbox">
                </input>
                <CiSearch className="sicon"/>
                
                </div> 
                <FaMicrophone className="mic"/>     
               <div>
                <div className="last">
                    <div><MdVideoCall className="vid"/></div>
                    
                    <div><CiBellOn className="bel"/></div>
                        
                    <div><CgProfile className="profile"/></div>
                        
                   </div> 
                    </div>
        </div>
    )
 }
 export default Header;