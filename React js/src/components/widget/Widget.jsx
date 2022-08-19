import "./widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const Widget = ({ type }) => {
  let data;
  const [count,setCount] = useState("")
  const countFun = async()=>{
    // console.log(id);
    const response = await axios.get("http://localhost:5000/api/countUser");
    console.log(response.data)
    setCount(response.data.total)
    // console.log(data)
  }
  useEffect(() => {
    countFun().then();
  }, []);
  
  //temporary
  
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isCount: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.icon}&nbsp;&nbsp;&nbsp;{data.title} </span>
        <span className="counter">
          {data.isCount && "$"} {count}
        </span>
        <NavLink to="/getall" className="navLink">
        <span className="link text-secondary ">{data.link}</span>
        </NavLink>
      </div>
      {/* <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div> */}
    </div>
  );
};

export default Widget;
