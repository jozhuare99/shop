import {useState, useEffect} from 'react'
import {Button, Card} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
// import axios from 'axios'


export default function Body(){
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
        <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'}/>
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
        <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'}/>
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
        <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'}/>
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
        <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'}/>
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
        <Card.Img variant="top" src={'https://mobiili.fi/wp-content/uploads/2020/11/iphone_12_mini_pre_2-800x675.jpg'}/>
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