
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
import { Link } from "react-router-dom";
import {EditDetails} from "./EditDetails";
// @import "bootstrap/scss/bootstrap";
// import { IconButton } from '@mui/material';


export default function Getall() {
    return (

        <div className="home">
      <Sidebar />

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
    // const [deletedRow] = useState({});
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [ page, setPage ] = useState(1);
    
    const[isOpen ,setIsOpen] = useState(false);
 
    const fetchData = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/api/getall/${pageNumber}/${USER_PER_PAGE}`);
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
    
    // const filterList=(e)=>{
    //     let updateList = selectedUsers;
    //     console.log('u',updateList)
    //     updateList = updateList.filter(item => {
    //       return item.fullName.toLowerCase().search(
    //         e.target.value.toLowerCase()
    //         ) !== -1;
    //     });
    //     setSelectedUsers(updateList)
    //     console.log('se',selectedUsers)
       
    // }
    // // const search=(e)=> {
    //     console.log(e.target.value)
    //     this.setState({searchTerm: e.target.value})
    // }
    // const showDetails=(user)=> {
    //     user.show = !user.show;
    //     this.setState({...user});
    //     console.log(this.state)
    //    }
    // const editUser = (userData) => {
    //     setSelectedRow(userData);
        
    // };


    const handlePaginationChange=async (pageNumber)=>{
        
        await fetchData(pageNumber)
        setPage(pageNumber);
    }

    // const deleteUser = async (userData) => {
    //     setDeletedRow(userData);
    // };

    // const onClose = () => {
    //     setSelectedRow({});
    // };

    // const addUser = () => {
    //     navigate(`/addUser`);
    // };
    const onClickHandler = async (id,e)=>{
        navigate(`/EditDetails/${id}`)
    }
    const onDeleteClickHandler = async (id, e) => {
        console.log(id)
        // alert(e.target.value);
        // console.log(id);
        const response = await axios.delete(`http://localhost:5000/api/deleteUser/${id}`);
        console.log(response.data.data)
        // navigate('getall')
        // console.log(data)
     }
    

    return (
        <div className="mainDiv">
             <h1>&nbsp;&nbsp;Members</h1>
                                       
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Page {page}</p>
            {loading ? (
                <p>Loading..Please wait..</p>
            ) : (
                <>
                   <div     
                        userData={selectedRow}
                        open={Object.keys(selectedRow).length > 0}
                        // onClose={onClose}
                        onDataChange={fetchData}
                    />
                    {/* <div
                        userData={deletedRow}
                        open={Object.keys(deletedRow).length > 0}
                        // onDeleteModalClose={onDeleteModalClose}
                        onDataChange={fetchData}
                    /> */}
                    <div className="tableContainer" >
                        <div className="card">
                            {/* <div className="card-header">
                                <ToastContainer position="top-center"/>
                                <br/>
                                <h1 className="title"><b> <center>User Details</center></b></h1>
                            </div> */}
                            <div className="first">
                                {/* <button
                                    className="btn btn-warning float-left"
                                    style={{width: "125px", height: "35px", color: "white"}}
                                    onClick={addUser}
                                >
                                    Add New
                                </button> */}

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
                                                <th className="text-center" scope="col">Actions </th>
                                                
                                                {/* <th scope="col" >Actions</th> */}
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
                                                    {/* <td>{userData.usage}</td> */}
                                                    <td className="text-left">{userData.buildingname}</td>
                                                    <td className="text-center">{userData.buildingno}</td>
                                                   
                                                   
                                                     <td className="float-right text-center">
                                                         
                                                    {/* <IconButton aria-label="edit" >
                                                          <EditIcon />
                                                    </IconButton> 
                                                    <IconButton aria-label="delete">
                                                          <DeleteIcon />
                                                    </IconButton>   */}
                                                         <button
                                                            onClick={(e)=>(onClickHandler(userData.id,e))}
                                                            className="btn btn-outline-dark waves-effect"
                                                            style={{width: "150px", height: "38px"}}                                                           
                                                        >   
                                                            EDIT
                                                        </button>
                                                        &nbsp;  
                                                         <button
                                                            className=" btn btn-dark waves-effect"
                                                            style={{width: "150px", height: "38px"}}
                                                            onClick={(e) => (onDeleteClickHandler(userData.id,e)) }
                                                        >
                                                            DELETE
                                                        </button>  
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