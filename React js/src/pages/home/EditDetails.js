// import React from 'react';
// import { useState, useEffect } from "react";

// function EditDetails(props) {
    
//   const [details,setDetails]=useState({});

//     useEffect(()=> {
//         fetch("https://localhost:5000/api/updateUser/"+props.match.params.id)
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setDetails(result);
//           }
//         );
//     });
//   function changeDetailsData(e){

//   }
    //   return (
    //    <div>
    //        <h2>User Details...</h2>
    //        <p>
    //            <label>User ID : <input type="text" name="id" 
    //            value={details.id}></input></label>
    //        </p>
    //        <p>
    //            <label>User Name : <input type="text" name="fullName" 
    //            value={details.fullName}></input></label>
    //        </p>
    //        <p>
    //            <label>User Email : <input type="text" name="email" 
    //            value={details.email}></input></label>
    //        </p>
    //        <p>
    //            <label>User Building name : <input type="text" name="buildingname" 
    //            value={details.buildingname}></input></label>
    //        </p>
    //        <p>
    //            <label>User Building number : <input type="text" name="buildingno" 
    //            value={details.buildingno}></input></label>
    //        </p>
    //        <button>Update</button>
    //    </div>
    //     );
// }
// export default EditDetails
import { useParams } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import {useState, useRef , useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import {  useFormik } from "formik";

import {
    BoxContainer,
    FieldContainer,
    FieldError,
    FormContainer,
    FormSuccess,
    Input,
    SubmitButton,
    FormError,
  } from "../../components/accountBox/form";
  import CustomSelect from "../../components/accountBox/customSelect";
function EditDetails(props){
    const {id} = useParams();
    const [data,setData] = useState("")
    const navigate = useNavigate();
    const [details,setDetails]=useState("")
   
    const Edit = async()=>{
        // console.log(id);
        const response = await axios.get(`http://localhost:5000/api/getSingleUser/${id}`);
        // console.log(response.data)
        setDetails(response.data)
        console.log(details)
    }
    useEffect(() => {
        Edit().then();
     }, []);

    //  const onClickHandler = async (id, e) => {
    //     console.log(id)
    //     // alert(e.target.value);
    //     // console.log(id);
    //     const response = await axios.put(`http://localhost:5000/api/updateUser/${id}`,{fullName:"Dhanusha",email:"dhanudhanusha88@gmail.com",buildingname:"Kent",buildingno:2});
    //     console.log(response.data.data)
    //     navigate('/getall')
    //     // console.log(data)
    //  }
    
     const [success, setSuccess] = useState(null);
     const [error, setError] = useState(null);
     // const [role, setRole]=useState();
     const onSubmit = async (values) => {
       const { ...data } = values;
   
       const response = await axios.put(`http://localhost:5000/api/updateUser/${id}`, data)
         .catch((err) => {
           if (err && err.response) setError(err.response.data.message);
           setSuccess(null);
         });
   
       if (response && response.data) {
         setError(null);
         setSuccess(response.data.message);
         formik.resetForm();
         navigate('/getall')
       }
     console.log(response);
     };
   
     const formik = useFormik({
        initialValues: {
          fullName: "",
          email:"",
          buildingname:"",
          buildingno:"",
        },
        validateOnBlur: true,
        onSubmit,
      });
      
  const buildingname=[
    {label:'Kent',value:'Kent'},
    {label:'Revathy Apartments',value:'Revathy Apartments'},
    {label:'Sayoojyam Apartments',value:'Sayoojyam Apartments'},
    {label:'Gokulam Apartments',value:'Gokulam Apartments'}
  ]
  const buildingno=[
      {label:"1", value:"1"},
      {label:"2", value:"2"},
      {label:"3", value:"3"},
      {label:"4", value:"4"},
      {label:"5", value:"5"},
      {label:"6", value:"6"},
      {label:"7", value:"7"},
      {label:"8", value:"8"},
      {label:"9", value:"9"},
      {label:"10", value:"10"},
      {label:"11", value:"11"},
      {label:"12", value:"12"},
      {label:"13", value:"13"},
      {label:"14", value:"14"},
      {label:"15", value:"15"},
      {label:"16", value:"16"},
      {label:"17", value:"17"},
      {label:"18", value:"18"},
      {label:"19", value:"19"},
      {label:"20", value:"20"},
      {label:"21", value:"21"},
      {label:"22", value:"22"},
      {label:"23", value:"23"},
      {label:"24", value:"24"},
      {label:"25", value:"25"},
      {label:"26", value:"26"},
      {label:"27", value:"27"},
      {label:"28", value:"28"},
      {label:"29", value:"29"},
      {label:"30", value:"30"},
      {label:"31", value:"31"},
      {label:"32", value:"32"},      
      {label:"33", value:"33"},
      {label:"34", value:"34"},       
      {label:"35", value:"35"},
      {label:"36", value:"36"},
      {label:"37", value:"37"},      
      {label:"38", value:"38"},
      {label:"39", value:"39"},    
      {label:"40", value:"40"},
  ]

    
     return (
        <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
       
        <div>
        <div className="head">
        <br/>
      <h1>&nbsp;&nbsp;Fill the Form</h1>
      </div>
    <BoxContainer className="box">
    
      {!error && <FormSuccess>{success ? success : ""} </FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="fullName"
            maxLength={30}
            placeholder="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="email"
            maxLength={30}
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
        </FieldContainer>
        
       
        
        <FieldContainer>
        <label className="text-secondary" htmlFor="buildingname">Building Name</label>
          <CustomSelect 
            options={buildingname}
            value={formik.values.buildingname}
            onChange={value=>formik.setFieldValue('buildingname',value.value)}
            />
        </FieldContainer>
         <FieldContainer>
         <label className="text-secondary" htmlFor="buildingname">Building Number</label>
        
          <CustomSelect
            options={buildingno}            
            value={formik.values.buildingno}
            onChange={value=>formik.setFieldValue('buildingno',value.value)}
            >
           </CustomSelect>
          <FieldError>
            {formik.touched.buildingno && formik.errors.buildingno
              ? formik.errors.buildingno
              : ""}
          </FieldError>
        </FieldContainer>
        

        
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Submit
        </SubmitButton>  
        
      </FormContainer>
     
    </BoxContainer>
    </div>
            {/* <button   onClick={(e) => (onClickHandler(data.id, e)) }>Update</button> */}
      </div>
      </div>
         );
    
}
export default EditDetails