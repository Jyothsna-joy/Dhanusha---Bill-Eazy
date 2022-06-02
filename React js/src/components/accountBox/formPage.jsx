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

    const response = await axios.post("http://localhost:5000/api/usage", data)
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
      month:"",
      usage: "",
      buildingname:"",
      buildingno:"",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  
  console.log("Error", error);
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
     
    <BoxContainer>
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
          <Input
            name="buildingname"
            maxLength={30}
            placeholder="Building name"
            value={formik.values.buildingname}
            onChange={formik.handleChange}
             onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.buildingname && formik.errors.buildingname
              ? formik.errors.buildingname
              : ""}
          </FieldError>
        </FieldContainer>
         <FieldContainer>
          <Input
            name="buildingno"
            maxLength={30}
            placeholder="Building number"
            value={formik.values.buildingno}
            onChange={formik.handleChange}
             onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.buildingno && formik.errors.buildingno
              ? formik.errors.buildingno
              : ""}
          </FieldError>
        </FieldContainer>
        

        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Signup
        </SubmitButton>  
        
      </FormContainer>
     
    </BoxContainer>
    </div>
    </div>
  );
}
