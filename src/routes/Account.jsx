import React from 'react'
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import {Container} from 'react-bootstrap'

export default function Account(){

  const navigation = useNavigation()

  return(
    <>
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