import { HashRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Dashboard from "./pages/Dashboard"
import RequestPage from "./pages/RequestPage"
import Requests from "./pages/Requests"
import Profile from "./pages/Profile"
import ResourceSchedule from "./pages/ResourceSchedule"
import axios from "axios";
import LoginForm from './pages/LoginForm'
import Register from './pages/admin/Register'
import BookSlot from "./pages/BookSlot"
import ViewUser from "./pages/admin/ViewUser"
import { UserContext, UserContextProvider } from "./context/userContext"
import {SnackbarProvider} from 'notistack';
import { useContext, useEffect, useState } from "react"
import DefaultPage from "./pages/DefaultPage"

axios.defaults.baseURL = 'https://pictresource.pythonanywhere.com';
axios.defaults.withCredentials = true;


const App = () => {
  return (
    <UserContextProvider>
      <SnackbarProvider 
      maxSnack={1} 
      autoHideDuration={1500}  
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Dashboard/>} />
              <Route path="/request" element={<RequestPage/>} />
              <Route path="/requests" element={<Requests/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/resource/:resName" element={<ResourceSchedule/>} />
              <Route path="/admin/add" element={<Register/>} />
              <Route path="/login" element={<LoginForm/>} />
              <Route path="/bookSlot" element={<BookSlot/>} />
              <Route path="/admin/view" element={<ViewUser/>} />
              <Route path="/*" element={<DefaultPage/>}/>
            </Route>
          </Routes>
        </HashRouter>
      </SnackbarProvider>
    </UserContextProvider>
  )
}

export default App