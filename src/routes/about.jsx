import {useState} from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import About2Cover from '../assets/SVG/about-img.svg'

export default function About(){

  const deviceheight = window.innerHeight;
  return (
    <>
        <Container className='user-select-none shopBody'>
         <div className='item-container d-flex flex-wrap flex-row overflow-auto'>
          <Container className='' fluid>
            <Image fluid src={About2Cover}></Image>
            <h2 className=' position-absolute text-light'>Quick Retail</h2>
          </Container>
         </div>
        </Container>
     
    </>
  )
}