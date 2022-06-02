 import Sidebar from "../../components/sidebar/Sidebar";
 import Navbar from "../../components/navbar/Navbar";
// import axios from "axios";
// import React,{useState} from "react";
// export default function Info() {
//     return (

//         <div className="home">
//       <Sidebar />
//       <div className="homeContainer">
//         <Navbar />
//         <div className="user">
//           <GetInformation />
//         </div>
       
//       </div>
//     </div>   
    
            
           
//     );
// }
 
// function GetInformation(){
//   const [file, setFile] = useState()

//   function handleChange(event) {
//     setFile(event.target.files[0])
//   }
//   function handleSubmit(event) {
//     event.preventDefault()
//     const url = 'http://localhost:5000/usage';
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('fileName', file.name);
//     const config = {
//       headers: {
//         'content-type': 'multipart/form-data',
//       },
//     };
//     axios.post(url, formData, config).then((response) => {
//       console.log(response.data);
//     });

//   }
//     return(
//       <div className="App">
//       <form onSubmit={handleSubmit}>
//         <h1>Prior informtion</h1>
//         <input type="file" onChange={handleChange}/>
//         <button type="submit">Upload</button>
//       </form>
//   </div>
//     );
// }

import {useState} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import './info.scss';
const XLSX = require("xlsx");
export const ParseExcel = () => {
  const[fileName,setFileName]=useState(null);
    const handleFile = async(e) =>{

      const file=e.target.files[0];
      setFileName(file.name);
      const data = await file.arrayBuffer();
      const workbook=XLSX.read(data);

      const worksheet=workbook.Sheets[workbook.SheetNames[0]];
      const jsonData=XLSX.utils.sheet_to_json(worksheet);
          
      console.log(jsonData);
    }
    return (
      
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="user">
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                       onChange={(e) => handleFile(e)}
                       className="form-control"
                       multiple/>
            </div>

            <button>Submit</button>
       
          
        </div>
       
      </div>
    </div>   

      
    )
};
export default ParseExcel  ;