import './App.css';
import Header from './components/Header'
// import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import Profile,{Profile2,Profile3,AppCollapse}  from './components/profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import PackingList, { PackingList2, DrinkList} from './components/Packing';
import Clock, {TeaGathering} from './components/pureFuntion'
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
    <PackingList />
    <PackingList2 />
    <DrinkList />
    <Clock />
    <TeaGathering/>
    <AppCollapse/>
    </Container>
    </>
  );
}

export default App;


