import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
// import axios from 'axios'


export default function Body() {
  const [image, setImage] = useState(null)



  // useEffect(()=>{
  //   const category = 'nature'

  //   axios.get('https://api.api-ninjas.com/v1/randomimage?category='+category,{
  //     responseType: 'blob',
  //       headers:{
  //   'X-Api-Key':'OnlrIUXF/WMF3pxax/Nvvw==wJbnPxW0AZ8EvgeY',
  //   'Accept': 'image/jpg'
  // }

  //   })
  //   .then(response=>{
  //     const imageUrl = URL.createObjectURL(response.data)
  //     setImage(imageUrl)
  //   })
  //   .catch(error=>{
  //     console.error(error)
  //   })
  // }, [])

  return (
    <Container className={'shopBody'}>
      <Container className='card-items d-flex flex-wrap user-select-none' >
        <Card className='card-item mx-2'>
          <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'} />
          <div className=' my-0 card-rating'>
            <p className='my-0 ms-1 text-small-size'>
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
                      <rect id="d" data-name="rectangle" x="2.74" y=".99" width="50%" height="26.06" style={{ fill: 'black' }} />
                    </g>
                  </g>
                </g>
              </svg>(899)
            </p>
          </div>
          <Card.Body className='p-2 bg-warning '>
            <Card.Title className='mb-0 line-height-0 '>Card Title longer ..</Card.Title>
            <Card.Text className='m-0 fs-3 p-0'>&#8369;123.45 </Card.Text>
            <p className='fw-lighter line-height-0'>81% discount off &#8369;12.65 </p>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='card-item mx-2'>
          <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'} />
          <div className='bg-warning my-0 card-rating'>
            <p className='my-0 ms-1'>start star</p>
          </div>
          <Card.Body className='card-item-body'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='card-item mx-2'>
          <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'} />
          <div className='bg-warning my-0 card-rating'>
            <p className='my-0 ms-1'>start star</p>
          </div>
          <Card.Body className='pt-1'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='card-item mx-2'>
          <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'} />
          <div className='bg-warning my-0 card-rating'>
            <p className='my-0 ms-1'>start star</p>
          </div>
          <Card.Body className='pt-1'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='card-item mx-2'>
          <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'} />
          <div className='bg-warning my-0 card-rating'>
            <p className='my-0 ms-1'>start star</p>
          </div>
          <Card.Body className='pt-1 '>
            <Card.Title className='user-select-all'>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>

    </Container>
  )
} 