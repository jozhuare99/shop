import {useState} from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import About2Cover from '../assets/SVG/about-img.svg'
import Core from '../assets/SVG/core.svg'

export default function About(){

  return (
    <>
        <Container className='user-select-none shopBody'>
         <div className='d-flex flex-wrap'>
          <Container className='bg-black h-100' fluid>
            <Image src={About2Cover}></Image>
            <h2 className='q-retail position-relative text-light '>Quick Retail</h2>
            <div className='px-4 '>
              <p className='text-light text-justify text-indent-1'>January 2, 2023, jozhuare99 is a web developer who wnat to build a projects on its own eCommerece platform, This is shoppng site is only for educational purposes only and not itended to sell any of the product that are listed on this online store. this shop has reach most of the countries in south east asia, Philippines, Singapore Thailand, Today have a best selecton of brands and sellers, and by 2030, we aim to serve the billion of customers around the earth. This shop has became jozhuare99 first eCommerce opensource shopping site built in react js babel express mysql and more.. Tech. in Future we aim to master this technology and infrastructure.
              </p>
            </div>
            <div className='ps-4 mx-auto d-flex flex-nowrap justify-content-center align-items-center'>
              <Image className=' size-4 bg-light rounded-circle' src={Core}></Image>
              <h2 className='ps-1 position-static text-light '>Core of Shop</h2>
            </div>
            
          </Container>
         </div>
        </Container>
     
    </>
  )
}