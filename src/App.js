import React,{useState,createContext,useContext} from 'react'
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import './App.css'
import './style/bootstrap.css'
import useDeviceWidth from './components/customHook/useDeviceWidth'
import Header from './components/header'


function App() {
  const{mobile, tablet, monitor} = useDeviceWidth()
  const navigation = useNavigation()

  return (
    <>
      <Header mobile={mobile} tablet={tablet} monitor={monitor}/>

      <div className={navigation.state === 'loading' ? 'bg-danger': ''}>
   
          <Outlet />
      
      </div>
    </>
  );
}


export default App;


