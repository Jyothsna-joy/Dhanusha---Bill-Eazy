
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
import UsersPage from "./pages/home/UsersPage";
import Excel from "./pages/list/excel";
import GetUsage from "./pages/home/GetUsage";

// import { SignupForm } from "./components/accountBox/signupForm";

// function App() {
//   return (
//     <AppContainer>
//      <AccountBox />   
//     </AppContainer>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



function App() {
  const { darkMode } = useContext(DarkModeContext);

  // /dashboard/profile
  return (
    <Router>
      <div className={ darkMode ? "app dark" : "app"}>
        
        <Routes>
          <Route exact path="/" element={<AppContainer><AccountBox /></AppContainer>}/>
          <Route  path="/register" element={<SignupForm />} />
          <Route  path="/Home" index element={<Home />} />
          <Route path="/getall" index element={<Getall />} /> 
          <Route path="/UsersPage" index element={<UsersPage/> } />
          <Route path="/Excel" index element={<Excel /> }      /> 
          <Route path="/FormPage" index element={<FormPage/>}/>
          <Route path="/GetUsage" index element={<GetUsage/>} />

          <Route path="/logout" element={<AppContainer><AccountBox /></AppContainer>}/>
                  </Routes>
      </div>
    </Router>
   
  );
}

export default App;