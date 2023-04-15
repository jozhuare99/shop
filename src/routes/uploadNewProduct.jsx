import {useState} from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import About2Cover from '../assets/SVG/about-img.svg'
import Core from '../assets/SVG/core.svg'
import axios from 'axios'


export default function uploadNewProduct(){
  const [product,setProduct] = useState({})

  const handleProductSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('/api/product', product)
      console.log(response.data)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <>
        <Container className=''>
          <form onSubmit={handleProductSubmit}>
            <input type='text' placeholder='Name' value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value})} />
            <input type='number' placeholder='Price' value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value})} />
            <input type='number' placeholder='Price' value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value})} />
            
          </form>
        </Container>
     
    </>
  )
}