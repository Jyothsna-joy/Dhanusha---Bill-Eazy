// import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// //import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
// // import {fas} from '@fortawesome/free-solid-svg-icons';
// // import {faMoneyCheckAlt} from '@fortawesome/free-regular-svg-icons';
// import {FaBars} from "react-icons/fa";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// //import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
// import ReceiptIcon from '@mui/icons-material/Receipt';
// //import DescriptionIcon from '@mui/icons-material/Description';
// // import PaymentIcon from '@mui/icons-material/Payment';
// import { NavLink } from "react-router-dom";
// import CreateIcon from '@mui/icons-material/Create';
// import { Nav } from "reactstrap";
// import { useState } from "react";
// import {
//   FaTh,
//   FaUserAlt,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList
// }from "react-icons/fa";
// const Sidebar = ({children}) => {
//   const { dispatch } = useContext(DarkModeContext);
//   const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//   const menuItem=[
//     {
//         path:"/Home",
//         name:"Dashboard",
//         icon:<DashboardIcon/>
//     },
//     {
//         path:"/getall",
//         name:"About",
//         icon:<perso/>
//     },
//     {
//         path:"/analytics",
//         name:"Analytics",
//         icon:<FaRegChartBar/>
//     },
//     {
//         path:"/comment",
//         name:"Comment",
//         icon:<FaCommentAlt/>
//     },
//     {
//         path:"/product",
//         name:"Product",
//         icon:<FaShoppingBag/>
//     },
//     {
//         path:"/productList",
//         name:"Product List",
//         icon:<FaThList/>
//     }
// ]
//   return (
    
//        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//           <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">BillEzy</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//       <hr />
//       {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//       <div className="center">
//         <ul>
//           <p className="title">MAIN</p>
//           <NavLink exact to="/Home" className="main-nav" activeClassName="main-nav-active" >
//           {/* <NavLink to="/Home" activeClassName="active-link" style={{ textDecoration: "none" }}  > */}
          
//           <li>
//             <DashboardIcon className="icon" />
//             <span>Dashboard</span>
//           </li>
//           </NavLink>
//           <p className="title">LISTS</p>
//           <NavLink to="/getall" activeClassName="active-link" >
         
//             <li>
//               <PersonOutlineIcon className="icon" />
//               <span>Users</span>
//             </li>
//             </NavLink>
//           {/* <p className="title">USEFUL</p>
         
//           <li>style={{ textDecoration: "none" }} 
//             <NotificationsNoneIcon className="icon" />
//             <span>Notifications</span>
//           </li> */}
//           <p className="title">SERVICE</p>
//           <NavLink to="/FormPage" activeClassName="active-link"  >
          
//           <li>
//             <LightbulbIcon className="icon" />
//             <span>Usage</span>
//           </li>
//          </NavLink>
          
//           <NavLink to="/Excel" activeClassName="active-link"  >
          
//           <li>
//             <CreateIcon className="icon" />
//             <span>Readings</span>
//           </li>
//          </NavLink>
//          <NavLink to="/GetUsage" activeClassName="active-link" >
         
//           <li>
//             <SettingsSystemDaydreamOutlinedIcon className="icon" />
//             <span>Snapshots</span>
//           </li>
//           </NavLink>
//           <NavLink to="/Invoice" activeClassName="active-link" >
       
//           <li>
//             <ReceiptIcon className="icon" />
//             <span>Invoices</span>
//           </li>
//           </NavLink>
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
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Sidebar;



// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';



// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/Home",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/getall",
//             name:"About",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/analytics",
//             name:"Analytics",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/comment",
//             name:"Comment",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"/productList",
//             name:"Product List",
//             icon:<FaThList/>
//         }
//     ]
//     return (
//         <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;



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
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
}from "react-icons/fa";
const Sidebar = ({children}) => {
  const { dispatch } = useContext(DarkModeContext);
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
    {
        path:"/Home",
        name:"Dashboard",
        icon:<DashboardIcon/>
    },
    {
        path:"/getall",
        name:"Users",
        icon:<PersonOutlineIcon/>
    },
    {
        path:"/FormPage",
        name:"Usage",
        icon:<LightbulbIcon/>
    },
    {
        path:"/Excel",
        name:"Readings",
        icon:<CreateIcon/>
    },
    {
        path:"/GetUsage",
        name:"Snapshots",
        icon:<SettingsSystemDaydreamOutlinedIcon/>
    },
    {
        path:"/Invoice",
        name:"Instant Invoice",
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
                   <br/>
               </div>
      <hr />
      {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active" onClick={handleClick}>
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

export default Sidebar;

