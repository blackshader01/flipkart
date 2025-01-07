import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


export default function OtherCategories() {
    const products = [
        
            {
              title: "Geared Cycles",
              price: "Up to 70% Off",
              image: "https://rukminim1.flixcart.com/image/210/210/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=80"
            },
            {
              title: "Remote Control Toys",
              price: "Up to 80% Off",
              image: "https://rukminim1.flixcart.com/image/210/210/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=80"
            },
            {
              title: "Best of Action Toys",
              price: "Up to 70% Off",
              image: "https://rukminim1.flixcart.com/image/210/210/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=80"
            },
            {
              title: "Gym Essentials",
              price: "From ₹139",
              image: "https://rukminim1.flixcart.com/image/210/210/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=80"
            }
          ];
          
    
  return (
    <Container className="my-5">
        <h2 className="mb-4">Beauty, Food, Toys &amp; more</h2>

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
                        <Card.Text style={{fontWeight:"bold"}}>{products.price}</Card.Text>
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
              <Card.Text style={{fontWeight:"bold"}}>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
 
    </Container>

  )
}
