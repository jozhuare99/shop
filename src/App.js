import React,{useState,createContext,useContext} from 'react'
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import './App.css'
import './style/bootstrap.css'
import Header from './components/header'
import Chat from './components/chat'


function App() {
  const navigation = useNavigation()
  const [showChat, setShowChat] = useState(false)
  return (
    <>
      <Header/>

      <div className={navigation.state === 'loading' ? 'bg-danger': ''}>
          <Outlet />
      </div>
      <Chat showChat={showChat} setSC={setShowChat}/>
    </>
  );
}


export default App;


