import {useState} from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { Container } from 'react-bootstrap'


export default function About(){

  const deviceheight = window.innerHeight;
  return (
    <>
        <Container className='user-select-none shopBody'>
         <div style={{height: `${deviceheight-85}px`}} className='item-container d-flex flex-wrap flex-row overflow-auto'>
          <h1>This is About page</h1>
         </div>
        </Container>
     
    </>
  )
}