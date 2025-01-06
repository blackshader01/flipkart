import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Optional for custom styling
import FlipkartLogo from '../../assets-src/flipkart-logo'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4">
      <Container>
        <Row>
          <Col md={6} className="last-list" style={{fontSize: "16px"}}>
          <div className="main" style={{display:"flex",justifyContent: "space-between"}}>
            <div>
            <h5>ABOUT</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
         </div>

         <div>

          
            <h5>GROUP COMPANIES</h5>
            <ul className="list-unstyled">
              <li>Myntra</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
          </div>
         <div>
            <h5>HELP</h5>
            <ul className="list-unstyled">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
            </ul>
            </div>
          
         <div>
            <h5>CONSUMER POLICY</h5>
            <ul className="list-unstyled">
              <li>Cancellation & Returns</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
            </div>
            </div>
          </Col>
          


          <Col md={6}>
          <div className="last-list" style={{display:"flex",justifyContent: "space-between"}}>
          <div>
            <h6>Mail Us:</h6>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India.
            </p>
            </div>
            <div>
            <h6>Registered Office Address:</h6>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India.<br />
              CIN : U51109KA2012PTC066107<br />
              Telephone: 044-45614700 / 044-67415800
            </p>
            </div>
            </div>
          </Col>
        
        </Row>
          

        <hr className="border-light" />

        <Row className="mt-3">
  <Col className="d-flex justify-content-between align-items-center">
    {/* Left Section: Links */}
    <div style={{ display: "flex", justifyContent: "flex-start", gap: "30px", marginLeft: "10px" }}>
      <ul className="list-inline mb-0 d-flex gap-4">
        <li className="list-inline-item">Become a Seller</li>
        <li className="list-inline-item">Advertise</li>
        <li className="list-inline-item">Gift Cards</li>
        <li className="list-inline-item">Help Center</li>
      </ul>
    </div>

    {/* Center Section: Copyright */}
    <div className="text-center"  style={{fontWeight:"500"}} >
      <p style={{fontWeight:"500"}} className="mb-0">&copy; 2007-2025 Flipkart.com</p>
    </div>

    {/* Right Section: Payment Logos */}
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <FlipkartLogo />
    </div>
  </Col>
</Row>

      </Container>
    </footer>
  );
};

export default Footer;
