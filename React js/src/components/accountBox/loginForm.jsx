import {  useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import { useNavigate } from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormError,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import * as yup from "yup";
import axios from "axios";
import CustomSelect from "./customSelect";
const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const navigate=useNavigate();
      
  const onSubmit = async (values) => {
    
    setError(null);
    const response = await axios
      .post("http://localhost:5000/api/login", values)
      .catch((err) => {
        
        if (err && err.response) setError(err.response.data.message);
      });
      console.log(response)
    if (response) {
     navigate('/Home')
      
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  const role=[
    {label:'Admin',value:'admin'},
    {label:'User',value:'user'},
    {label:'Caretaker',value:'caretaker'},
    {label:'owner',value:'owner'}
  ]
  
  console.log("Error", error);
  

  return (
    <BoxContainer>
      <FormError>{error ? error : ""}</FormError>
      <FormContainer onSubmit={formik.handleSubmit} >
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
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <MutedLink href="#">Forgot Password?</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Login
        </SubmitButton>
       
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    
  );
}
