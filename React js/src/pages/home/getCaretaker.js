
import {useNavigate} from "react-router-dom";
//import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./getall.scss";
import Sidebar2 from "../../components/sidebar/Sidebar2";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { FaSort } from 'react-icons/fa';
import React, {useState, useEffect} from "react";
import axios from "axios";
import { USER_PER_PAGE } from "../../components/accountBox/constants";
import Pagination from "../../components/accountBox/pagination";
import { Link } from "react-router-dom";
import {EditDetails} from "./EditDetails";
// @import "bootstrap/scss/bootstrap";
// import { IconButton } from '@mui/material';


export default function GetCaretaker() {
    return (

        <div className="home">
      <Sidebar2 />

      <div className="homeContainer">
        <Navbar />
        <br></br>
        <div className="user">
        <GetUserDetails/>
          
        </div>
       
      </div>
    </div>   
    
            
           
    );
}

function GetUserDetails() {
    const navigate = useNavigate();
    const API_URL = "http://localhost:5000/api/getall";
    const [apiResponse, setApiResponse] = useState(null); //hook
    const [selectedRow] = useState({});
    const [selectedUsers, setSelectedUsers] = useState(null);
    const [order,setOrder] = useState('ASC');
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [ page, setPage ] = useState(1);
    const [user, setUser]=useState(null);
    
    const[isOpen ,setIsOpen] = useState(false);
 
    const fetchData = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/api/getall/${pageNumber}/${USER_PER_PAGE}`);
            console.log("RESPONSE:",response.data.data)
            console.log(response.data.data[0].buildingname)
            
            setTotalPages(Math.ceil(response.data.total / USER_PER_PAGE));
            setLoading(false)
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        handlePaginationChange(1).then();
    }, []);
    const sorting=(col)=>{
        console.log(order)
        if(order==='ASC'){
            const sorted = [...selectedUsers].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setSelectedUsers(sorted);
            setOrder('DSC');
        }
        if(order==='DSC'){
            const sorted = [...selectedUsers].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setSelectedUsers(sorted);
            setOrder('ASC');
        }
    }
    


    const handlePaginationChange=async (pageNumber)=>{
        
        await fetchData(pageNumber)
        setPage(pageNumber);
    }
    const onClickHandler = async (id,e)=>{
        navigate(`/EditDetails/${id}`)
    }

    return (
        <div className="p-0.8 mainDiv">
             <h1>&nbsp;&nbsp;Members</h1>
                                       
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Page {page}</p>
            {loading ? (
                <p>Loading..Please wait..</p>
            ) : (
                <>
                   <div     
                        userData={selectedRow}
                        open={Object.keys(selectedRow).length > 0}
                     
                        onDataChange={fetchData}
                    />
                   
                    <div className="tableContainer" >
                        <div className="card">
                           
                            <div className="first">
                            

                                <div className="main">
                                    <div className="example-container mat-elevation-z8">
                                        <table className=" table table-hover table-striped" >
                                            <thead className="head ">
                                                <br/>
                                               
                                            <tr>
                                                <th className="text-center" scope="col" onClick={()=>sorting("id")}>ID</th>
                                                <th className="text-center" scope="col" onClick={()=>sorting("fullName")}>Full Name<FaSort /></th>
                                                <th className="text-center" scope="col" onClick={()=>sorting("email")}>Email<FaSort /></th>
                                                <th className="text-center" scope="col" onClick={()=>sorting("buildingname")}>Building name <FaSort/></th>
                                                <th className="text-center" scope="col" onClick={()=>sorting("buildingno")}>Building number </th>
                                                
                                            </tr>
                                            </thead>
                                            <tbody>
                                           
                                            {/* {selectedUsers.filter(userData => {
          return userData.fullName.toLowerCase().indexOf(searchTerm) > -1;
        }).map((userData) => {
          return (<li onClick={() => showDetails(userData)}><h2>{userData.fullName}</h2> */}
          
                                            {selectedUsers?.map((userData) => (
                                                <tr key={userData.id}>
                                                    <td className="text-center">{userData.id}</td>
                                                    <td className="text-left">{userData.fullName}</td>
                                                    <td className="text-left">{userData.email}</td>
                                                    <td className="text-left">{userData.buildingname}</td>
                                                    <td className="text-center">{userData.buildingno}</td>
                                                   
                                                   
                                                     <td className="float-right text-center">
                                                         
                                                     </td> 
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                        
                                        <Pagination style={{display: isOpen ? "block" : "none"}}
                                            totalPages={totalPages}
                                            handleClick={handlePaginationChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}