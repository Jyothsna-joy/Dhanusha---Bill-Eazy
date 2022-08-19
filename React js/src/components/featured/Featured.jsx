import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Payments</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} styles={{ path: { stroke: `#8884d8`},text: {fill: '#8884d8',  fontSize: '20px'} }}/>
        </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">Rs. 12.4k</div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Featured;









// import "./featured.scss";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
// //import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

// const Featured = () => {
//   const [count,setCount] = useState({})
//   const count1=count.toFixed(2);
//   const countFun = async()=>{
//     // console.log(id);
//     const response = await axios.get("http://localhost:5000/api/totalUsage");
//     console.log(response.data.data[0].units)
//     const a=response.data.data[0].units;
//     console.log(a)
//     setCount(a)
//     console.log(count)
//     // console.log(count)
//   }
//   useEffect(() => {
//     countFun().then();
//   }, [count1]);
  
 
//   return (
//     <div className="featured">
//       <div className="top">
//         <h1 className="title">Total Payments</h1>
//         <MoreVertIcon fontSize="small" />
//       </div>
//       <div className="bottom">
//         <div className="featuredChart">
//           <CircularProgressbar value={count1} text={count1} strokeWidth={5} styles={{ path: { stroke: `#8884d8`},text: {fill: '#8884d8',  fontSize: '20px'} }}/>
//         </div>
//           <div className="item">
//             <div className="itemTitle">Last Month</div>
//             <div className="itemResult positive">
//               <div className="resultAmount">Usage : {count1}</div>
//             </div>
//           </div>
//         </div>
//       </div>
    
//   );
// };

// export default Featured;
