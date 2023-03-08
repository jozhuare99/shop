import React,{useState} from 'react'
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";

import './style/bootstrap.css'
import Header from './components/header'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;


