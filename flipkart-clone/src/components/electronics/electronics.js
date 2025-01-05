import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import './electronics.css'

export default function Electronics() {
    const products = [
        {
          title: "Fastrack Smartwatches",
          price: "From ₹1,399",
          image: "https://rukminim1.flixcart.com/image/210/210/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80"
        },
        {
          title: "Best True Wireless Headphones",
          price: "Grab Now",
          image: "https://rukminim1.flixcart.com/image/210/210/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=80"
        },
        {
          title: "Projector",
          price: "From ₹6,990",
          image: "https://rukminim1.flixcart.com/image/210/210/xif0q/projector/q/7/6/i9-pro-10-ei9027-led-projector-egate-original-imah5e3bggu5qcgp.jpeg?q=80"
        },
        {
          title: "Monitors",
          price: "From ₹7,949",
          image: "https://rukminim1.flixcart.com/image/210/210/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=80",
        },
      ];
  return (
    <Container className="my-5">
        <h2 className="mb-4">Best Of Electronics</h2>

       { /* md and lg */}

       <Row className="d-none d-md-flex">
        {products.map((products,index)=>(
            <Col md={3} key={index} className="mb-4">
                <Card>
                    <Card.Img
                    variant="top"
                    src={products.image}
                    alt={products.title}
                    style={{height:"200px",objectFit: "scale-down"}} />

                    <Card.Body className="text-center">
                        <Card.Title style={{fontSize: "1rem"}}>
                            {products.title}
                        </Card.Title>
                        <Card.Text>{products.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
     </Row>

     <div className="d-md-none horizontal-scroll">
        {products.map((product, index) => (
          <Card
            key={index}
            style={{
              display: "inline-block",
              width: "80%",
              marginRight: "15px",
              marginTop: "10px",
              justifyContent: "center",
              alignItems:"center",
              marginLeft:"50px"
            }}
          >
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.title}
              style={{ height: "150px", objectFit: "scale-down" }}
            />
            <Card.Body className="text-center">
              <Card.Title style={{ fontSize: "1rem" }}>
                {product.title}
              </Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
 
    </Container>

  )
}
