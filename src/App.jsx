import React from "react";
import Navbar from "./Component/Navbar";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Component/Welcome";
import { AuthProvider, useAuth } from "./Component/Authcontext";
import MainNavBar from "./Component/Main-nav";
import EmployeeForm from "./Component/Empform";
import ViewAllEmp from "./Component/ViewAllEmploy";
function AppContaint() {
  const { isLoggedIn, loading } = useAuth();
  if(loading){
    return <div style={{textAlign:"center", marginTop:"50px"}}>Loading...</div>;
  }
  return (
    <div>
      {isLoggedIn ? <MainNavBar/> : <Navbar/>}
      {/* <Navbar/> */}
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Welcome />}></Route>

        ) : (
          <Route path="/" element={<Home />}></Route>
        )}
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/addemp" element={<EmployeeForm />}></Route>
        <Route path="/view" element={<ViewAllEmp />}></Route>
      </Routes>
    </div>
  );
}
function App() {
  return (
    <AuthProvider>
      <AppContaint />
    </AuthProvider>
  );
}
export default App