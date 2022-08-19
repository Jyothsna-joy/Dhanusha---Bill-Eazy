
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
const Sidebar1 = ({children}) => {
  const { dispatch } = useContext(DarkModeContext);
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const email1=localStorage.getItem("email")
  console.log(email1)
  const pageNumber=1
    console.log(pageNumber)
    
  const menuItem=[
    {
        path:"/UserHome",
        name:"Dashboard",
        icon:<DashboardIcon/>
    },
    {
        path:`/GetUsageUser/${email1}`,
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

export default Sidebar1;

































//  import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// // import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// //import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// //import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
// // import ReceiptIcon from '@mui/icons-material/Receipt';
// //import DescriptionIcon from '@mui/icons-material/Description';
// // import PaymentIcon from '@mui/icons-material/Payment';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

// import { Link } from "react-router-dom";
// // import CreateIcon from '@mui/icons-material/Create';

// const Sidebar = () => {
//   const { dispatch } = useContext(DarkModeContext);
//   return (
//     <div className="sidebar">
//       <div className="top">
//           <span className="logo">Billezy</span>
        
//       </div>
//       <hr />
//       <div className="center">
//         <ul>
//           <p className="title">MAIN</p>
//           <Link to="/UsersPage" style={{ textDecoration: "none" }}  >
          
//           <li className="active">
//             <DashboardIcon className="icon" />
//             <span>Dashboard</span>
//           </li>
//           </Link>
//           <p className="title">USEFUL</p>
         
//           <li>
//             <NotificationsNoneIcon className="icon" />
//             <span>Notifications</span>
//           </li>
//           <p className="title">SERVICE</p>
//           <li>
//             <SettingsSystemDaydreamOutlinedIcon className="icon" />
//             <span>Snapshots</span>
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faMoneyCheckAlt} className="icon" />
//             <span>Bills</span>
//           </li>
        
//         </ul>
//       </div>
//       <div className="bottom">
//         <div
//           className="colorOption"
//           onClick={() => dispatch({ type: "LIGHT" })}
//         ></div>
//         <div
//           className="colorOption"
//           onClick={() => dispatch({ type: "DARK" })}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
