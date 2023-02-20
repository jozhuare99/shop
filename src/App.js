import './App.css';
import Header from './components/Header'
// import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import Profile,{Profile2,Profile3,AppCollapse}  from './components/profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import PackingList, { PackingList2, DrinkList} from './components/Packing';
import Clock, {TeaGathering} from './components/pureFuntion'
import { Container} from 'react-bootstrap'
import Gallery from './components/sculpture'
import InputGreetingsForm, {FeedbackForm} from './components/useState/input'
import RequestTracker from './components/useState/time'
import Process from './components/useState/process'
import MovingDot from './components/useState/updatingStateObject'
import Form, {Form1,FormImmer,Canvas} from './components/useState/ObjectMutation'
import List from './components/useState/updateState'
import {ShoppingCart2, ShoppingCart3, TaskApp} from './components/useState/updateArrayObject'
import FilterableList from './components/managingState/searchSharingState'

function App() {
  return (
    <>
    <Header />
    <Container>
      <FilterableList/>
      <TaskApp/>
      <div style={{
        height:'300px'
      }}>
            <Canvas/>
      </div>
      <List/>
  <ShoppingCart2/>
  <ShoppingCart3/>
      <Form/>
      <Form1/>
      <FormImmer/>
      <MovingDot/>
    <Process/>
    <FeedbackForm/>
    <section>
    <h1>Amazing Scientist</h1>
    <RequestTracker/>
    <InputGreetingsForm/>
    <Profile />
    <Profile2 />
    <Profile3 />
    </section>
    <PackingList />
    <PackingList2 />
    <DrinkList />
    <Clock />
    <TeaGathering/>
    <AppCollapse/>
    <Gallery/>
    </Container>
    </>
  );
}

export default App;


