
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
//import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
// import {fas} from '@fortawesome/free-solid-svg-icons';
// import {faMoneyCheckAlt} from '@fortawesome/free-regular-svg-icons';
// import {FaBars} from "react-icons/fa";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
//import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import ReceiptIcon from '@mui/icons-material/Receipt';
//import DescriptionIcon from '@mui/icons-material/Description';
// import PaymentIcon from '@mui/icons-material/Payment';
import { NavLink } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';
import { Nav } from "reactstrap";
import { useState } from "react";
import { USER_PER_PAGE } from "../../components/accountBox/constants";
import Pagination from "../../components/accountBox/pagination";
 
 
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
}from "react-icons/fa";
const Sidebar3 = ({children}) => {
  const { dispatch } = useContext(DarkModeContext);
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
const buildingname=localStorage.getItem("buildingname")
    
  const menuItem=[
    {
        path:"/OwnerHome",
        name:"Dashboard",
        icon:<DashboardIcon/>
    },  

    {
        path:`/GetBuildingUsage/${buildingname}`,
        name:"Invoice",
        icon:<ReceiptIcon/>
    }
]
const handleClick = event => {
   setIsOpen (true);
 
  // 👇️ refers to the link element
};
  return (
    <div>
    <div className="container">
       <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
          <div className="top_section ">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">BillEzy</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>

                   </div>
               </div>
      <hr />
      {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link " activeclassName="active" onClick={handleClick}>
                           <div className="icon" >{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
      </div>
      </div>
      <main>{children}</main>
    
    </div>
  );
};

export default Sidebar3;






















