import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import {v1} from 'uuid'


export default function Body() {

  
  let emptyValue =  [
    {id: 0, name: '', price: 0, percentDiscount: 0, rating: 0, sold: 0, reviewed: 0, location: '', imgLink: ''},
  ]
  const [items, setItems] = useState(emptyValue)

  useEffect(()=>{
    function  createItem(id, name, price, percentDiscount,rating,sold,reviewed,location,imgLink){
      return {id, name, price, percentDiscount,rating,sold,reviewed,location,imgLink}
    }

    function createItems(data){
      let items = []
      for(let subarray of data){
        let item = createItem(...subarray)
        items.push(item)
      }
      return items;
    }
     let data = [
      [0,'Apple iPhone 14',54390,12,80,20,10,'Metro Manila','https://lzd-img-global.slatic.net/g/p/c3a87a020e49a43809142e7bef034494.jpg_720x720q80.jpg_.webp'],
      [5,'Astron Inverter Class .6HP Aircon with remote (improved R-32 energy-efficient refrigerant 9.9 EER window-type air conditioner TC-LRE60 built-in air filter anti-rust body white)',8549,5,94,2819,661,'Metro Manila','https://lzd-img-global.slatic.net/g/p/ab1cbd38146dbfaaf8d135549acac972.jpg_720x720q80.jpg_.webp'],
      [1,'Samsung Galaxy s23 8GB+128GB/256/Galaxy s23+ 8GB +256GB/512GB Dual Sim 5G',42990 ,20 ,100 ,2 ,1 ,'Bulacan','https://lzd-img-global.slatic.net/g/p/d72700f9ce5d7ff78a2cf574d5687ed1.png_720x720q80.png_.webp'],
      [2,'Xiaomi 13 12+256 Global Version [in 1+1 year warranty]',44999 ,0 ,76 ,300 ,215 ,'Overseas','https://lzd-img-global.slatic.net/g/p/e0dcae74dd5cd99e39cf26378011298d.png_720x720q80.png_.webp'],
      [3,'Google Pixel 6 PRO 5G 12GB/128GB [Unlocked] with Free Google Pixel Buds',34990 ,25 ,50 ,2 ,1 ,'Metro Manila','https://lzd-img-global.slatic.net/g/p/7045863a9aedd2c1e00d5fc2da333b97.png_720x720q80.png_.webp'],
      [4,'Nokia 5710 XpressAudio, Unisoc T107, 128MB + 48MB, Removable 1450 mAh Battery, Cellphone',4190 ,0 ,62 ,100 ,85 ,'Metro Manila','https://lzd-img-global.slatic.net/g/p/87a76cefdb37037f1b1036ff349cf8b0.png_720x720q80.png_.webp'],
      [6,'TCL 1HP Inverter Aircon Split-type Air Conditioner TAC-09CSA/KEI (White)',24995 ,22 ,92 ,60 ,6 ,'Metro Manila','https://lzd-img-global.slatic.net/g/p/194e78ace60627a803eb0f3db05b7542.jpg_720x720q80.jpg_.webp'],
      [7,'ASAHI by Winland 30Liters Electric Air Fryer Convection Oven with Rotisserie OT 3012 OT-3012',7573.50 ,18 ,90 ,21 ,5 ,'Metro Manila','https://lzd-img-global.slatic.net/g/p/7de382f311e19fbfc5b41bdfd2df889a.jpg_720x720q80.jpg_.webp'],
      [7,'Brother DCP-L2540DW Wireless Compact Laser Printer (Black) 3-in-1 Monochrome Laser Multi-Function Center with Automatic 2-sided Printing and Wireless Networking',12630 ,21 ,95 ,223 ,31 ,'Metro Manila','https://lzd-img-global.slatic.net/g/p/1abe504021e253c3901c739ad9d2ae74.png_720x720q80.png_.webp'],
      [8,'Jordan Men\'s Air T-Shirt - White',1395 ,0 ,98 ,135 ,15 ,'Laguna','https://lzd-img-global.slatic.net/g/p/baf0b45e7ceb0658134cf83255cc633b.jpg_720x720q80.jpg_.webp'],
      [9,'ZANZEA Womens Casual Plain Harem Pants Elastic Waist Holiday Wide Leg Long Trousers #8',553 ,47 ,100 ,33 ,3 ,'Metro Manila','https://lzd-img-global.slatic.net/g/p/3d710e5876e6aea6ebeab8db13980ddb.jpg_720x720q80.jpg_.webp'],
      [10,'Handsome Workwear Thickened Wide Stitching plus Size Spring/Autumn and Winter Fat Loose Jacket Denim Jacket for Men',732.35 ,41 ,99 ,69 ,17 ,'Overseas','https://lzd-img-global.slatic.net/g/ff/kf/S8bffd51216654b93806c1a925995ab01D.jpg_720x720q80.jpg_.webp'],
      [11,'Jordan Men\'s Air T-Shirt - White',253.82 ,36 ,98 ,13989 ,2853 ,'Bulacan','https://lzd-img-global.slatic.net/g/p/170e4af737326a65c567b8a622695408.jpg_720x720q80.jpg_.webp'],
     ]
     let initialItems = createItems(data)
     


    setItems(initialItems)
  },[])

  return (
    <>
      <Container className='user-select-none shopBody'>
         <div className='item-container d-flex flex-wrap flex-row overflow-auto'>
          <Items items={items} />
         </div>
      </Container>
    </>
  )
} 

function Items({items}){

  return (
    <>
      {items.map(item=>
        item.name ? 
        <div className='card-item  float-start mx-2  mt-3 ' key={v1()}>
        <Card className='' >
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
          <Card.Title className='mb-0  text-smaller '>{item.name.length > 14 ? item.name.slice(0,17)+'...': item.name}</Card.Title>
          <Card.Text className='m-0 text-large p-0'>&#8369;{item.price}</Card.Text>
          <p className=' text-tiny mb-0'>{item.percentDiscount}% discount off &#8369;{(item.price * (item.percentDiscount/100)).toFixed(2)}</p>
          <p className='text-meduim mb-0'>{item.sold} SOLD</p>
          <p className='text-small mb-0 text-end'>{item.location}</p>
        </Card.Body>
      </Card>
      </div>
      :
      ''
      )}
    </>
  )
}

let initialdata = [
  {id: 0, name: 'Apple iPhone 14', price: 54390, percentDiscount: 12, rating: 80, sold: 20, reviewed: 10, location: 'Metro Manila', imgLink: 'https://lzd-img-global.slatic.net/g/p/c3a87a020e49a43809142e7bef034494.jpg_720x720q80.jpg_.webp'},
  {id: 1, name: 'Samsung Galaxy s23 8GB+128GB/256/Galaxy s23+ 8GB +256GB/512GB Dual Sim 5G', price: 42990, percentDiscount: 20, reviewed: 1, rating: 100, sold: 2, location: 'Bulacan', imgLink: 'https://lzd-img-global.slatic.net/g/p/d72700f9ce5d7ff78a2cf574d5687ed1.png_720x720q80.png_.webp'},
  {id: 2, name: 'Xiaomi 13 12+256 Global Version [in 1+1 year warranty]', price: 44999, percentDiscount: 0, rating: 76, sold: 300, reviewed: 215,  location: 'Overseas', imgLink: 'https://lzd-img-global.slatic.net/g/p/e0dcae74dd5cd99e39cf26378011298d.png_720x720q80.png_.webp'},
  {id: 3, name: 'Google Pixel 6 PRO 5G 12GB/128GB [Unlocked] with Free Google Pixel Buds', price: 34990, percentDiscount: 25, rating: 50, sold: 2, reviewed: 1,  location: 'Metro Manila', imgLink: 'https://lzd-img-global.slatic.net/g/p/7045863a9aedd2c1e00d5fc2da333b97.png_720x720q80.png_.webp'},
  {id: 4, name: 'Nokia 5710 XpressAudio, Unisoc T107, 128MB + 48MB, Removable 1450 mAh Battery, Cellphone', price: 4190, percentDiscount: 0, rating: 62, sold: 100, reviewed: 85,  location: 'Metro Manila', imgLink: 'https://lzd-img-global.slatic.net/g/p/87a76cefdb37037f1b1036ff349cf8b0.png_720x720q80.png_.webp'},
]