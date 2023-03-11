import {useState, useEffect} from 'react'
import {Button, Card} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import axios from 'axios'

// const api = axios.create({
//   baseURL:'https://api.ninja.com',
//   responseType: 'blob',
//   headers:{
//     'X-Api-Key':'OnlrIUXF/WMF3pxax/Nvvw==wJbnPxW0AZ8EvgeY'
//   }
// })

export default function Body(){
	const [image, setImage] = useState(null)



  useEffect(()=>{
    const category = 'nature'

    axios.get('https://api.api-ninjas.com/v1/randomimage?category='+category,{
      responseType: 'blob',
        headers:{
    'X-Api-Key':'OnlrIUXF/WMF3pxax/Nvvw==wJbnPxW0AZ8EvgeY',
    'Accept': 'image/jpg'
  }

    })
    .then(response=>{
      const imageUrl = URL.createObjectURL(response.data)
      setImage(imageUrl)
    })
    .catch(error=>{
      console.error(error)
    })
  }, [])

	return (
		<Container className={'shopBody'}>
			 <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image!==null ? image: 'https://th.bing.com/th/id/OIP.cmTcUqX-2WFqJofdiwQLBQHaHa'}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image!==null ? image: 'https://th.bing.com/th/id/OIP.cmTcUqX-2WFqJofdiwQLBQHaHa'}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
		</Container>
		)
} 