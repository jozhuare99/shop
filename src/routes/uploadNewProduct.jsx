import { useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { Container, Image, Form as reactForm, Stack, Row, Col, Card } from 'react-bootstrap'
import About2Cover from '../assets/SVG/about-img.svg'
import Core from '../assets/SVG/core.svg'
import axios from 'axios'
import cityData from '../data/City.json'


export default  function UploadNewProduct() {
  const data =  function(){
    if (typeof cityData !== "string"){
      console.log('not a valid String')
      JSON.stringify(cityData)
    }
    const city =  JSON.parse(cityData)
    return city
  }
  const [product, setProduct] = useState({})
  const [inputArray, setInputArray] = useState(new Array(5).fill(''))

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const newArray = [...inputArray]
    newArray[index] = value.slice(0, 90)
    setInputArray(newArray)
  }

  const handleProductSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/product', product)
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }


  // Address Selection
  const [regionName, setRegionName] = useState('');
  const [provinceList, setProvinceList] = useState([]);
  const [municipalityList, setMunicipalityList] = useState([]);
  const [barangayList, setBarangayList] = useState([]);

  const handleRegionChange = (e) => {
    setRegionName(e.target.value);
    const selectedRegion = data.find((region) => region.region_name === e.target.value);
    setProvinceList(selectedRegion.provinces);
    setMunicipalityList([]);
    setBarangayList([]);
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = provinceList.find((province) => province.province_name === e.target.value);
    setMunicipalityList(selectedProvince.municipalities);
    setBarangayList([]);
  };

  const handleMunicipalityChange = (e) => {
    const selectedMunicipality = municipalityList.find((municipality) => municipality.municipality_name === e.target.value);
    setBarangayList(selectedMunicipality.barangays);
  };



  return (
    <>
      <Container className=''>
        <reactForm onSubmit={handleProductSubmit} className=''>
          <Stack gap={3}>

            <reactForm.Group>
              <reactForm.Label htmlFor='product_name'>Product Title</reactForm.Label>
              <reactForm.Control type='text' id='product_name' placeholder='Enter Product Title Here.' maxLength='160' value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} required />
            </reactForm.Group>

            <Container>
              <Row>
                <Col>
                  <reactForm.Group>
                    <reactForm.Label htmlFor='product_price'>Price</reactForm.Label>
                    <reactForm.Control type='number' id='product_price' placeholder='Exact Price' value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
                  </reactForm.Group>
                </Col>
                <Col>
                  <reactForm.Group>
                    <reactForm.Label htmlFor='product_discount'>Discount</reactForm.Label>
                    <reactForm.Control type='number' id='product_discount' placeholder='Promo Discount' value={product.percentDiscount} onChange={(e) => setProduct({ ...product, percentDiscount: e.target.value })} required />
                  </reactForm.Group>
                </Col>
              </Row>
            </Container>

            <reactForm.Group>
              <reactForm.Label htmlFor='product_location'>Location in Region</reactForm.Label>
              <reactForm.Control type='text' id='product_location' placeholder='Warehouse Location' maxLength='50' value={product.location} onChange={(e) => setProduct({ ...product, name: e.target.value })} required />
            </reactForm.Group>

          </Stack>


          <input type='text' placeholder='Location' value={product.location} onChange={(e) => setProduct({ ...product, location: e.target.value })} />
          <Container className='px-2'>
            <p>Tag features</p>
            {inputArray.map((value, index) => (
              <input key={index} type='text' className='w-100' value={value} maxLength={35} onChange={(event) => {
                handleInputChange(event, index)
              }} />
            ))}
          </Container>

          <input type='submit' value='Add Product' />
        </reactForm>
      </Container>

      <h1>Address Selection Sample</h1>
      <Container>
        <Card>
          <div>
            <label htmlFor="region">Region:</label>
            <select id="region" name="region" value={regionName} onChange={handleRegionChange}>
              <option value="">Select Region</option>
              {data.map((region) => (
                <option key={region.region_code} value={region.region_name}>
                  {region.region_name}
                </option>
              ))}
            </select>

            <br />

            <label htmlFor="province">Province:</label>
            <select id="province" name="province" onChange={handleProvinceChange}>
              <option value="">Select Province</option>
              {provinceList.map((province) => (
                <option key={province.province_code} value={province.province_name}>
                  {province.province_name}
                </option>
              ))}
            </select>

            <br />

            <label htmlFor="municipality">City/Municipality:</label>
            <select id="municipality" name="municipality" onChange={handleMunicipalityChange}>
              <option value="">Select City/Municipality</option>
              {municipalityList.map((municipality) => (
                <option key={municipality.municipality_code} value={municipality.municipality_name}>
                  {municipality.municipality_name}
                </option>
              ))}
            </select>

            <br />

            <label htmlFor="barangay">Barangay:</label>
            <select id="barangay" name="barangay">
              <option value="">Select Barangay</option>
              {barangayList.map((barangay) => (
                <option key={barangay.barangay_code} value={barangay.barangay_name}>
                  {barangay.barangay_name}
                </option>
              ))}
            </select>
          </div>
        </Card>
      </Container>

    </>
  )
}