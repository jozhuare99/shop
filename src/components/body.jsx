import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import {v1} from 'uuid'
// import axios from 'axios'



export default function Body() {
  let initialItems = [
    {id: 0, name: 'Apple iPhone 14', price: 54390, percentDiscount: 12, rating: 80, sold: 20, reviewed: 10, location: 'Metro Manila', imgLink: 'https://lzd-img-global.slatic.net/g/p/c3a87a020e49a43809142e7bef034494.jpg_720x720q80.jpg_.webp'},
    {id: 1, name: 'Samsung Galaxy s23 8GB+128GB/256/Galaxy s23+ 8GB +256GB/512GB Dual Sim 5G', price: 42990, percentDiscount: 20, reviewed: 1, rating: 100, sold: 2, location: 'Bulacan', imgLink: 'https://lzd-img-global.slatic.net/g/p/d72700f9ce5d7ff78a2cf574d5687ed1.png_720x720q80.png_.webp'},
    {id: 2, name: 'Xiaomi 13 12+256 Global Version [in 1+1 year warranty]', price: 44999, percentDiscount: 0, rating: 76, sold: 300, reviewed: 215,  location: 'Overseas', imgLink: 'https://lzd-img-global.slatic.net/g/p/e0dcae74dd5cd99e39cf26378011298d.png_720x720q80.png_.webp'},
    {id: 3, name: 'Google Pixel 6 PRO 5G 12GB/128GB [Unlocked] with Free Google Pixel Buds', price: 34990, percentDiscount: 25, rating: 50, sold: 2, reviewed: 1,  location: 'Metro Manila', imgLink: 'https://lzd-img-global.slatic.net/g/p/7045863a9aedd2c1e00d5fc2da333b97.png_720x720q80.png_.webp'},
    {id: 4, name: 'Nokia 5710 XpressAudio, Unisoc T107, 128MB + 48MB, Removable 1450 mAh Battery, Cellphone', price: 4190, percentDiscount: 0, rating: 62, sold: 100, reviewed: 85,  location: 'Metro Manila', imgLink: 'https://lzd-img-global.slatic.net/g/p/87a76cefdb37037f1b1036ff349cf8b0.png_720x720q80.png_.webp'},
  ]

  let initialItems2 = [
    {id: 1, name: 'Samsung Galaxy s23 8GB+128GB/256/Galaxy s23+ 8GB +256GB/512GB Dual Sim 5G', price: 42990, percentDiscount: 20, reviewed: 1, rating: 100, sold: 2, location: 'Bulacan', imgLink: 'https://lzd-img-global.slatic.net/g/p/d72700f9ce5d7ff78a2cf574d5687ed1.png_720x720q80.png_.webp'},
    {id: 0, name: 'Apple iPhone 14', price: 54390, percentDiscount: 12, rating: 80, sold: 20, reviewed: 10, location: 'Metro Manila', imgLink: 'https://lzd-img-global.slatic.net/g/p/c3a87a020e49a43809142e7bef034494.jpg_720x720q80.jpg_.webp'},
    {id: 3, name: 'Google Pixel 6 PRO 5G 12GB/128GB [Unlocked] with Free Google Pixel Buds', price: 34990, percentDiscount: 25, rating: 50, sold: 2, reviewed: 1,  location: 'Metro Manila', imgLink: 'https://lzd-img-global.slatic.net/g/p/7045863a9aedd2c1e00d5fc2da333b97.png_720x720q80.png_.webp'},
    {id: 4, name: 'Nokia 5710 XpressAudio, Unisoc T107, 128MB + 48MB, Removable 1450 mAh Battery, Cellphone', price: 4190, percentDiscount: 0, rating: 62, sold: 100, reviewed: 85,  location: 'Metro Manila', imgLink: 'https://lzd-img-global.slatic.net/g/p/87a76cefdb37037f1b1036ff349cf8b0.png_720x720q80.png_.webp'},
    {id: 2, name: 'Xiaomi 13 12+256 Global Version [in 1+1 year warranty]', price: 44999, percentDiscount: 0, rating: 76, sold: 300, reviewed: 215,  location: 'Overseas', imgLink: 'https://lzd-img-global.slatic.net/g/p/e0dcae74dd5cd99e39cf26378011298d.png_720x720q80.png_.webp'},
  ]

  const [items, setItems] = useState(initialItems)
  const [items2, setItems2] = useState(initialItems2)

  return (
    <Container className='user-select-none  shopBody d-flex flex-wrap align-items-start justify-content-start bg-warning mx-auto'>
        <div className='card-item d-flex flex-column bg-warning mx-auto'>
          <Items items={items} />
        </div>
        <div className='card-item  d-flex flex-column bg-warning mx-auto'>
          <Items items={items2} />
        </div>
        <div className='card-item d-flex flex-column bg-warning '>
          <Items items={items} />
        </div>
        <div className='card-item d-flex flex-column bg-warning '>
          <Items items={items2} />
        </div>
        <div className='card-item d-flex flex-column bg-warning '>
          <Items items={items} />
        </div>
    </Container>
  )
} 

function Items({items}){

  return (
    <>
      {items.map(item=>
        <Card className='my-2 mx-1 h-100 bg-danger' key={item.id}>
        <Card.Img variant="top" src={item.imgLink} />
        <div className=' my-0 card-rating'>
          <p className='my-0 ms-1 text-small'>
            <svg id="a" data-name="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30" className="w-50">
              <g>
                <path id="f" data-name="heart-5" d="M9.75,3.27c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1C8.47,17.21,3.06,15.29,3.06,9.83c0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'transparent', stroke: '#000', strokeMiterlimit: 10 }} />
                <path id="g" data-name="heart-4" d="M39.08,3.41c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1-7.31-8.69-12.72-10.61-12.72-16.07,0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'transparent', stroke: '#000', strokeMiterlimit: 10 }} />
                <path id="h" data-name="heart-3" d="M68.4,3.14c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1-7.31-8.69-12.72-10.61-12.72-16.07,0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10 }} />
                <path id="i" data-name="heart-2" d="M97.73,3.68c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1-7.31-8.69-12.72-10.61-12.72-16.07,0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10 }} />
                <path id="j" data-name="heart-1" d="M127.06,3.54c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1-7.31-8.69-12.72-10.61-12.72-16.07,0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10 }} />
              </g>
              <defs>
                <clipPath id="c">
                  <path id="f" data-name="heart-5" d="M9.75,3.27c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1C8.47,17.21,3.06,15.29,3.06,9.83c0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'transparent', stroke: '#000', strokeMiterlimit: 10 }} />
                  <path id="g" data-name="heart-4" d="M39.08,3.41c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1-7.31-8.69-12.72-10.61-12.72-16.07,0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'transparent', stroke: '#000', strokeMiterlimit: 10 }} />
                  <path id="h" data-name="heart-3" d="M68.4,3.14c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1-7.31-8.69-12.72-10.61-12.72-16.07,0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10 }} />
                  <path id="i" data-name="heart-2" d="M97.73,3.68c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1-7.31-8.69-12.72-10.61-12.72-16.07,0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10 }} />
                  <path id="j" data-name="heart-1" d="M127.06,3.54c3.7,0,6.69,2.94,6.69,6.56,0-3.62,2.99-6.56,6.69-6.56s6.69,2.94,6.69,6.56c0,5.46-5.41,7.38-12.72,16.07-.31,.36-.85,.41-1.21,.1-.04-.03-.07-.07-.1-.1-7.31-8.69-12.72-10.61-12.72-16.07,0-3.62,2.99-6.56,6.69-6.56Z" style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10 }} />
                </clipPath>
              </defs>
              <g id="b" data-name="cliped heart area">
                <g style={{ clipPath: 'url(#c)' }}>
                  <g id="e" data-name="heart group">
                    <rect id="d" data-name="rectangle" x="2.74" y=".99" width={`${item.rating}%`} height="26.06" style={{ fill: 'black' }} />
                  </g>
                </g>
              </g>
            </svg>
            ( {item.reviewed} )
          </p>
        </div>
        <Card.Body className=' p-2'>
          <Card.Title className='mb-0  text-smaller '>{item.name}</Card.Title>
          <Card.Text className='m-0 text-large p-0'>&#8369;{item.price}</Card.Text>
          <p className=' text-tiny mb-0'>{item.percentDiscount}% discount off &#8369;{item.price * (item.percentDiscount/100)}</p>
          <p className='text-meduim mb-0'>{item.sold} SOLD</p>
          <p className='text-small mb-0 text-end'>{item.location}</p>
        </Card.Body>
      </Card>
      
      )}
    </>
  )
}