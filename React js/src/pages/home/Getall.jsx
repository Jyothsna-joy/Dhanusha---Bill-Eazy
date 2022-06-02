

// import {useNavigate} from "react-router-dom";
//import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./getall.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { FaSort } from 'react-icons/fa';
import React, {useState, useEffect} from "react";
import axios from "axios";
export default function Getall() {
    return (

        <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="user">
        <GetUserDetails/>
          
        </div>
       
      </div>
    </div>   
    
            
           
    );
}

function GetUserDetails() {
    // const navigate = useNavigate();
    // const API_URL = "http://localhost:5000/api/getall";
    // const [apiResponse, setApiResponse] = useState(null); //hook
    const [selectedRow] = useState({});
    const [selectedUsers, setSelectedUsers] = useState(null);
    const [order,setOrder] = useState('ASC');
    const [deletedRow] = useState({});
    // const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [ setPage] = useState(1);
    

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/api/getall`);
            console.log(response.data)
            // console.log(response.data.data);
            setSelectedUsers(response.data);
            
            // console.log(selectedUsers);
            // setTotalPages(Math.ceil(response.data.total ));
            setLoading(false)
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        handleData(1).then();
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


    const handleData=async ()=>{
        await fetchData()
        setPage();
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


    return (
        <div>
            
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
                    <div
                        userData={deletedRow}
                        open={Object.keys(deletedRow).length > 0}
                        // onDeleteModalClose={onDeleteModalClose}
                        onDataChange={fetchData}
                    />
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
                                        <h1>User details</h1>
                                        <table className="table" >
                                            <thead className="head">
                                                <br/>
                                               
                                            <tr>
                                                <th scope="col" onClick={()=>sorting("fullName")}>Full Name<FaSort /></th>
                                                <th scope="col" onClick={()=>sorting("email")}>Email <FaSort/></th>
                                                <th scope="col" onClick={()=>sorting("buildingname")}>Building name <FaSort/></th>
                                                <th scope="col" onClick={()=>sorting("buildingno")}>Building number <FaSort/></th>
                                                <th scope="col" >Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                           
                                            {/* {selectedUsers.filter(userData => {
          return userData.fullName.toLowerCase().indexOf(searchTerm) > -1;
        }).map((userData) => {
          return (<li onClick={() => showDetails(userData)}><h2>{userData.fullName}</h2> */}
          
                                            {selectedUsers?.map((userData) => (
                                                <tr key={userData.id}>
                                                    <td>{userData.fullName}</td>
                                                    <td>{userData.email}</td>
                                                    <td>{userData.buildingname}</td>
                                                    <td>{userData.buildingno}</td>
                                                   
                                                   
                                                    <td className="float-right">
                                                        
                                                    {/* <IconButton aria-label="edit" >
                                                          <EditIcon />
                                                    </IconButton> 
                                                    <IconButton aria-label="delete">
                                                          <DeleteIcon />
                                                    </IconButton>  */}
                                                         <button
                                                            className="button1 bg-dark"
                                                            style={{width: "150px", height: "38px"}}
                                                            // onClick={() => editUser(userData)}
                                                            
                                                        >
                                                            EDIT
                                                        </button>
                                                        &nbsp;  
                                                         <button
                                                            className="button2 bg-danger "
                                                            style={{width: "150px", height: "38px"}}
                                                            // onClick={() => deleteUser(userData)}
                                                        >
                                                            DELETE
                                                        </button> 
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                       
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