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
              <p className='text-light text-justify text-indent-1'>January 2, 2023, jozhuare99 is a web developer who wnat to build a projects on its own eCommerece platform, This is shoppng site is only for educational purposes only and not itended to sell any of the product that are listed on this online store. this shop has reach most of the countries in south east asia, Philippines, Singapore Thailand, Today have a best selecton of brands and sellers, and by 2030, we aim to serve the billion of customers around the earth. This shop has became jozhuare99 first eCommerce opensource shopping site built in react js babel express nosql and more.. Tech. in Future we aim to master this technology and infrastructure.
              </p>
            </div>
            <div className='ps-4 mx-auto d-flex flex-nowrap justify-content-center align-items-center'>
              <Image className=' size-4 bg-light rounded-circle' src={Core}></Image>
              <h2 className='ps-1 position-static text-light '>Core of Shop</h2>
            </div>
            <div className='ps-4 mt-1 d-flex flex-nowrap justify-content-start align-items-center'>
              <h2 className='ps-1 position-static text-light '>Logistics</h2>
              <i className='bi bi-bus-front text-light fs-3 ms-1'></i>
              <div className='float-start'>
              <i className='bi bi-airplane text-light fs-3 ms-1'></i>
              <h2 className='ps-1 position-static text-light '>Local not International</h2>
              </div>
            </div>
            <div className='px-4 '>
              <p className='text-light text-justify text-indent-1'>With end to start logistics capabilities and complete control over our supply chain, physically any product is far away with fast speed of delivery, we got fulfillment centres across 17 Southeast Asian Cities, and our lost in warehouses, sorting cenres, and digital technologies complement our team network from cross-border and last mile arrangements in warehouse to the seller whenever planet.
            </p>
            </div>
            <div className='ps-4 mt-1 d-flex flex-nowrap justify-content-start align-items-center'>
              <h2 className='ps-1 position-static text-light '>Technology</h2>
              <i className='bi bi-motherboard-fill text-light fs-3 ms-1'></i>
              <div className='float-start'>
              <i className='bi bi-rocket-fill text-light fs-3 ms-1'></i>
              <h2 className='ps-1 position-static text-light '>Quick not Fast</h2>
              </div>
            </div>
            <div className='px-4 '>
              <p className='text-light text-justify text-indent-1'>At shop, we harness both technologies to redefine the retial experience, Leveraging data in real time allows us to quickly adapt demands and conditions. We connect consumers to the brans, to create customised experiences and have evolved into a retail destination that customers come to shop an d entertain and we push the blockage bounderies. Project Voyeager, our Technology Stack jointly developed with facebbin, powers by most scalable and quicker product and solutions for the next year.
            </p>
            </div>
            <div className='ps-4 mt-1 d-flex flex-nowrap justify-content-start align-items-center'>
              <h2 className='ps-1 position-static text-light '>Payments</h2>
              <i className='bi bi-credit-card-2-front text-light fs-3 ms-1'></i>
              <div className='float-start'>
              <i className='bi bi-shield-fill-check text-light fs-3 ms-1'></i>
              <h2 className='ps-1 position-static text-light '>Secured not Safe</h2>
              </div>
            </div>
            <div className='px-4 '>
              <p className='text-light text-justify text-indent-1'>Ensuring that every little transaction customer made in our platform must be secured and accurate, by partnering the most secure financial sevices infrastructure, In a region still at varying stages of cash, we have evolved our payment system to the latest payment system available online including crypto currencies, e payment, card payment because we really understand the customer needs thats why we give them a lot of options to pay without hesitation while easing customers into digital payments thuogh intuitive solutions they have.
              </p>
            </div>
          </Container>
         </div>
        </Container>
     
    </>
  )
}