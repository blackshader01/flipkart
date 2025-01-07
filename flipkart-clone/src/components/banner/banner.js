import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'

export default function Banner() {
  return (
   <Container>
    <Row>
        <Col md={12} className='d-none d-md-flex'>
        <img style={{width:"100%",marginBottom:"50px"}} src='https://rukminim1.flixcart.com/www/1070/780/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80'/>
        </Col>
    </Row>
   </Container>
  )
}
