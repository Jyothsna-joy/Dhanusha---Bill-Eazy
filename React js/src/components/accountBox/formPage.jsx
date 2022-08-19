import {  useFormik } from "formik";
import React, {  useState } from "react";
import { Marginer } from "../marginer";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import {
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  SubmitButton,
  FormError,
} from "./form";
import * as yup from "yup";
import axios from "axios";
import CustomSelect from "./customSelect";

const correct=/^[!A-Za-z]+$/;

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, "Please enter you real name")
    .matches(correct,"enter your real name,Name shouldn't contain number or special characters")
    .required("Full name is required!"),
  month:yup.string().required(),
  usage: yup.string().required(),
  buildingname: yup.string().required(),
  buildingno: yup.string().required(),
  
});

export function FormPage(props) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  // const [role, setRole]=useState();
  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    const response = await axios.post("http://localhost:5000/api/allDetails", data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  console.log(response);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email:"",
      month:"",
      usage: "",
      buildingname:"",
      buildingno:"",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
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
  console.log("Error", error);
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
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
          <Input
            name="month"
            placeholder="Month"
            value={formik.values.month}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.month && formik.errors.month
              ? formik.errors.month
              : ""}
          </FieldError>
        </FieldContainer>
        
        <FieldContainer>
          <Input
            name="usage"
            placeholder="Usage"
            maxLength={30}
            value={formik.values.usage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.usage && formik.errors.usage
              ? formik.errors.usage
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
        

        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Submit
        </SubmitButton>  
        
      </FormContainer>
     
    </BoxContainer>
    </div>
    </div>
  );
}
