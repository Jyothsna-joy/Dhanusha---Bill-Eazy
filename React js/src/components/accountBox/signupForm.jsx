import {  useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  MutedLink,
  SubmitButton,
  FormError,
} from "./common";
import { AccountContext } from "./context";
import * as yup from "yup";
import axios from "axios";
import CustomSelect from "./customSelect";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const correct=/^[!A-Za-z]+$/;

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, "Please enter you real name")
    .matches(correct,"enter your real name,Name shouldn't contain number or special characters")
    .required("Full name is required!"),
  email: yup.string().email("Please enter a valid email address").required(),
  buildingname: yup.string().required(),
  buildingno: yup.string().required(),
  
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match"),
    }),
});

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  // const [role, setRole]=useState();
  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    const response = await axios.post("http://localhost:5000/api/register", data)
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
      roles:"",
      fullName: "",
      email: "",
      buildingname:"",
      buildingno:"",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  const role=[
    {label:'User',value:'user'},
    {label:'Caretaker',value:'caretaker'},
    {label:'Owner',value:'owner'}
  ]
  
  console.log("Error", error);
  return (
    <BoxContainer>
      {!error && <FormSuccess>{success ? success : ""} </FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
      <FormContainer onSubmit={formik.handleSubmit}>

        <FieldContainer>
          <label htmlFor="roles">Roles</label>
          <CustomSelect 
            options={role}
            value={formik.values.roles}
            onChange={value=>formik.setFieldValue('roles',value.value)}
            />
             <FieldError>
            {formik.touched.roles && formik.errors.roles
              ? formik.errors.roles
              : ""}
          </FieldError>
        </FieldContainer>
        
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
            placeholder="Email"
            maxLength={30}
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
        

        <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            maxLength={25}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            maxLength={25}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""}
          </FieldError>
        </FieldContainer>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Signup
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
