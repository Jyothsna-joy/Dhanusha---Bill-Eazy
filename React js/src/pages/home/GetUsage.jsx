

 import {useNavigate} from "react-router-dom";
//import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./getall.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { FaSort } from 'react-icons/fa';
import React, {useState, useEffect} from "react";
import axios from "axios";
import { USER_PER_PAGE } from "../../components/accountBox/constants";
import Pagination from "../../components/accountBox/pagination";
import GenerateInvoice from "../../components/accountBox/generateInvoice";
import { NavLink } from "react-router-dom";
export default function GetUsage() {
    return (

        <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="user">
        <GetUsageDetails/>
          
        </div>
       
      </div>
    </div>   
    
            
           
    );
}

function GetUsageDetails() {
    const navigate = useNavigate();
    // const API_URL = "http://localhost:5000/api/getData";
    const [apiResponse, setApiResponse] = useState(null); //hook
    const [selectedRow] = useState({});
    const [selectedUsers, setSelectedUsers] = useState(null);
    const [order,setOrder] = useState('ASC');
    const [deletedRow] = useState({});
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [ page, setPage ] = useState(1);
    const [data,setData] =useState({});

    const fetchData = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/api/getData/${pageNumber}/${USER_PER_PAGE}`);
            console.log(response.data.data)
            // console.log(response.data.data);
            setSelectedUsers(response.data.data);
            console.log(selectedUsers);
            
            // console.log(selectedUsers);
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
    
    const onClickHandler = async (id, e) => {
        // alert(e.target.value);
        // console.log(id);
        navigate(`/GenerateInvoice/${id}`)
        // const response = await axios.get(`http://localhost:5000/api/getSingle/${id}`);
        // console.log(response.data)
        // setData(response.data)
        // console.log(data)
            
        // axios.get(`http://localhost:5000/api/getSingle/${id}`).then((response)=>{
        //     console.log(response.data.data)
        //     setData(response.data)
        //     console.log(data)
           
        // })
        
    }
    return (
        <div className="mainDiv">
            <h1>&nbsp;&nbsp;Electricity Usage details</h1>
                                        
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
                    <div className="tableContainer p-2" >
                        <div className="card">
                            <div className="first">
                           
                                <div className="main">
                                    <div className="example-container mat-elevation-z8">
                                        <table className="table table-hover table-white table-striped" >
                                            <thead className="head thead-dark">
                                                <br/>
                                               
                                            <tr>
                                                <th scope="col" onClick={()=>sorting("fullName")}>Full Name<FaSort /></th>
                                                <th scope="col" onClick={()=>sorting("email")}>Email<FaSort /></th>
                                                <th scope="col" onClick={()=>sorting("month")}>Month<FaSort /></th>
                                                <th scope="col" onClick={()=>("usage")}>Usage </th>
                                                <th scope="col" onClick={()=>sorting("buildingname")}>Building name <FaSort/></th>
                                                <th scope="col">Building number </th>
                                                
                                                {/* <th scope="col" >Actions</th> */}
                                            </tr>
                                            </thead>
                                            <tbody>
                                           
                                         
                                            {selectedUsers?.map((userData) => (
                                                <tr key={userData.id}>
                                                    <td>{userData.fullName}</td>
                                                    <td>{userData.email}</td>
                                                    <td>{userData.month}</td>
                                                    <td>{userData.usage}</td>
                                                    <td>{userData.buildingname}</td>
                                                    <td>{userData.buildingno}</td>
                                                   
                                                    <td className="float-right text-center">
                                                         
                                                        {/* <NavLink to="/GenerateInvoice/" activeClassName="active-link" > */}
                                                              <button
                                                                 className="btn btn-outline-dark waves-effect"
                                                                 style={{width: "150px", height: "38px"}}
                                                                 value={userData.id}
                                                                onClick={(e) => (onClickHandler(userData.id, e)) }
                                                                 
                                                             >   
                                                                 Generate invoice
                                                             </button>
                                                             {/* </NavLink> */}
                                                             </td>
                                                   
                                                </tr>))}
                                                
                                            </tbody>
                                        </table>
                                        <Pagination
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