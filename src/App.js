import './App.css';
import Header from './components/Header'
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import Profile from './components/profile'
import {Profile2,Profile3} from './components/profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap'


function App() {
  return (
    <>
    <Header />
    <Container>
    <section>
    <h1>Amazing Scientist</h1>
    <Profile />
    <Profile2 />
    <Profile3 />
    
    </section>
    </Container>
    </>
  );
}

export default App;


