import React from 'react'
import { Outlet, useNavigation, 
 // NavLink, useLoaderData, Form, redirect,  useSubmit, 
} from "react-router-dom";
import {Container} from 'react-bootstrap'
import AccountHeader from '../components/header/accountHeader'

export default function Account(){

  const navigation = useNavigation()

  return(
    <>
      <AccountHeader />
      <Container className='bg-light'>
        <h1>This is Header of Seller</h1>
        <div id="detail" className={
          navigation.state === 'loading' ? 'loading' : ''
        }>
          <Outlet />
        </div>
      </Container>
    </>
  )
}