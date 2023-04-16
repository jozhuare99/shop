import {useState} from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import About2Cover from '../assets/SVG/about-img.svg'
import Core from '../assets/SVG/core.svg'
import axios from 'axios'


export default function uploadNewProduct(){
  const [review,setReview] = useState({})

  const handleReviewSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('/api/review', review)
      console.log(response.data)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <>
        <Container className=''>
          <form onSubmit={handleReviewSubmit}>
            <input type='text' placeholder='Product Id' value={review.productInfo} onChange={(e) => setReview({ ...review, productInfo: e.target.value})} />
            <input type='number' placeholder='Rating' value={review.rating} onChange={(e) => setReview({ ...review, rating: e.target.value})} />
            <input type='text' placeholder='Message' value={review.message} onChange={(e) => setReview({ ...review, message: e.target.value})} />

            <input type='submit' value='Add Review'/>
          </form>
        </Container>
     
    </>
  )
}