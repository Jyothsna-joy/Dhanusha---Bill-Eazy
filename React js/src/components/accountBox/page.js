import React, {useState, useEffect} from "react";
import "./dashboard.css";
import {USER_PER_PAGE} from "../../utils/constants";
import {useNavigate} from "react-router-dom";
import Modal from "../modal/modal.jsx";
import DeleteModal from "../modal/deleteModal.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../services/interceptor";
import Pagination from "../Pagination/pagination";

export default function Dashboard() {
    return (
        <div>
            <GetUserDetails/>
        </div>
    );
}

function GetUserDetails() {
    const navigate = useNavigate();
    const API_URL = "http://localhost:3001/api/getAllUsers/";
    const [apiResponse, setApiResponse] = useState(null); //hook
    const [selectedRow, setSelectedRow] = useState({});
    const [selectedUsers, setSelectedUsers] = useState(null);
    const [order,setOrder] = useState('ASC');
    const [deletedRow, setDeletedRow] = useState({});
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchData = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await axiosInstance.get(`http://localhost:3001/api/getUsers/${pageNumber}/${USER_PER_PAGE}`);
            setSelectedUsers(response.data.data);
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
        if(order=='ASC'){
            const sorted = [...selectedUsers].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setSelectedUsers(sorted);
            setOrder('DSC');
        }
        if(order=='DSC'){
            const sorted = [...selectedUsers].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setSelectedUsers(sorted);
            setOrder('ASC');
        }
    }
    
    const filterList=(e)=>{
        let updateList = selectedUsers;
        console.log('u',updateList)
        updateList = updateList.filter(item => {
          return item.fullName.toLowerCase().search(
            e.target.value.toLowerCase()
            ) !== -1;
        });
        setSelectedUsers(updateList)
        console.log('se',selectedUsers)
       
    }
    // const search=(e)=> {
    //     console.log(e.target.value)
    //     this.setState({searchTerm: e.target.value})
    // }
    // const showDetails=(user)=> {
    //     user.show = !user.show;
    //     this.setState({...user});
    //     console.log(this.state)
    //    }
    const editUser = (userData) => {
        setSelectedRow(userData);
    };


    const handlePaginationChange=async (pageNumber)=>{
        await fetchData(pageNumber)
        setPage(pageNumber);
    }

    const deleteUser = async (userData) => {
        setDeletedRow(userData);
    };

    const onClose = () => {
        setSelectedRow({});
    };

    const onDeleteModalClose = () => {
        setDeletedRow({});
    };

    const addUser = () => {
        navigate(`/addUser`);
    };


    return (
        <div>
            <p>Page {page}</p>
            {loading ? (
                <p>Loading..Please wait..</p>
            ) : (
                <>
                    <Modal
                        userData={selectedRow}
                        open={Object.keys(selectedRow).length > 0}
                        onClose={onClose}
                        onDataChange={fetchData}
                    />
                    <DeleteModal
                        userData={deletedRow}
                        open={Object.keys(deletedRow).length > 0}
                        onDeleteModalClose={onDeleteModalClose}
                        onDataChange={fetchData}
                    />
                    <div className="tableContainer">
                        <div className="card">
                            <div className="card-header">
                                <ToastContainer position="top-center"/>
                                <br/>
                                <h2>User Details</h2>
                            </div>
                            <input class="search-box" onChange={filterList}  type="text"></input>
                            <div className="card-body">
                                <button
                                    className="btn btn-warning float-left"
                                    style={{width: "125px", height: "35px", color: "white"}}
                                    onClick={addUser}
                                >
                                    Add New
                                </button>

                                <div className="main">
                                    <div className="example-container mat-elevation-z8">
                                        <table className="table table-white table-striped table-hover table-bordered">
                                            <thead>
                                            <tr>
                                                <th scope="col" onClick={()=>sorting("fullName")}>FullName</th>
                                                <th scope="col" onClick={()=>sorting("email")}>Email</th>
                                                <th scope="col" >Phone</th>
                                                <th scope="col" onClick={()=>sorting("gender")}>Gender</th>
                                                <th scope="col" >CreatedAt</th>
                                                <th scope="col" >Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                           
                                            {/* {selectedUsers.filter(userData => {
          return userData.fullName.toLowerCase().indexOf(searchTerm) > -1;
        }).map((userData) => {
          return (<li onClick={() => showDetails(userData)}><h2>{userData.fullName}</h2> */}
          
                                            {selectedUsers?.map((userData) => (
                                                <tr key={userData._id}>
                                                    <td>{userData.fullName}</td>
                                                    <td>{userData.email}</td>
                                                    <td>{userData.phone}</td>
                                                    <td>{userData.gender}</td>
                                                    <td>{userData.createdAt}</td>

                                                    <td className="float-right">
                                                        <button
                                                            className="badge bg-dark"
                                                            style={{width: "55px", height: "30px"}}
                                                            onClick={() => editUser(userData)}
                                                        >
                                                            EDIT
                                                        </button>
                                                        <button
                                                            className="badge bg-danger"
                                                            style={{width: "65px", height: "30px"}}
                                                            onClick={() => deleteUser(userData)}
                                                        >
                                                            DELETE
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
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