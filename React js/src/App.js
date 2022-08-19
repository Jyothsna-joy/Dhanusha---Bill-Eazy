
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Home from "./pages/home/Home.jsx";
import { DarkModeContext } from "./context/darkModeContext";
import {SignupForm} from "./components/accountBox/signupForm";
import Getall from "./pages/home/Getall";
import { useContext } from "react";
import "./style/dark.scss";
import {FormPage} from './components/accountBox/formPage';
import Excel from "./pages/list/excel";
import GetUsage from "./pages/home/GetUsage";
import GetExcelData from "./pages/home/GetExcelData";
import Invoice from "./components/accountBox/invoice";
import GenerateInvoice from "./components/accountBox/generateInvoice";
import UserHome from "./pages/home/userHome";
import EditDetails from "./pages/home/EditDetails";
import GetSingleUsage from "./pages/home/getSingleUsage";
import GenerateUserBill from "./components/accountBox/GenerateUserBill";
import CaretakerHome from "./pages/home/caretakerHome";
import GetBuildingUsage from "./pages/home/getBuildingUsage";
import GetCaretaker from "./pages/home/getCaretaker";
import GenerateInvoiceUser from "./components/accountBox/generateInvoiceUser";
import OwnerHome from "./pages/home/ownerHome";
import Pay from "./components/accountBox/pay";
import GenerateInvoices from "./components/accountBox/generateInvoices";
// import { SignupForm } from "./components/accountBox/signupForm";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetUsageUser from "./pages/home/getUsageUser";
const AppContainer = styled.div`  width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`





function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <Router>
      <div className={ darkMode ? "app dark" : "app"}>
        
        <Routes>
          <Route exact path="/" element={<AppContainer><AccountBox /></AppContainer>}/>
          <Route  path="/register" element={<SignupForm />} />
          <Route  path="/Home/:id" index element={<Home />} />
          <Route  path="/Home" index element={<Home />} />
          <Route path="/getall" index element={<Getall />} /> 
          <Route path="/UserHome" index element={<UserHome/> } />
          <Route path="/Excel" index element={<Excel /> }      /> 
          <Route path="/FormPage" index element={<FormPage/>}/>
          <Route path="/GetUsage" index element={<GetUsage/>} />
          <Route path="/GetExcelData" index element={<GetExcelData/>} />
          <Route path="/Invoice" index element={<Invoice />} />
          <Route path="/GenerateInvoice/:id" index element={<GenerateInvoice />} />
          <Route path="/EditDetails/:id" index element={<EditDetails />} />
          <Route path="/GetSingleUsage" index element={<GetSingleUsage />} />
          <Route path="/GenerateUserBill/:id" index element={<GenerateUserBill />} />          
          <Route path="/GetUsageUser/:email" index element={<GetUsageUser />} />
          <Route path="/CaretakerHome" index element={<CaretakerHome />} />
          <Route path="/GetBuildingUsage/:buildingname" index element={<GetBuildingUsage />} />
          <Route path="/GetCaretaker" index element={<GetCaretaker />} />
          <Route path="/GenerateInvoiceUser/:id" index element={<GenerateInvoiceUser />} />
          <Route path="/GenerateInvoices/:id" index element={<GenerateInvoices />} />          
          <Route path="/OwnerHome" index element={<OwnerHome />} />
          <Route path="/Pay" index element={<Pay />} />
          
          <Route path="/logout" element={<AppContainer><AccountBox /></AppContainer>}/>
                  </Routes>
      </div>
    </Router>
   
  );
}

export default App;