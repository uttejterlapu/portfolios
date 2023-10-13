import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faMapMarkerAlt,
//   faEnvelope,
//   faPhone,
// } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/Footer.css'

function Footer() {
  const footerStyle = {
    padding: '20px 0px 0px', // Add 20px of padding
  };

  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <Container>
        <Row>
          <Col className='Colpad'>
            <h3>Follow Me on</h3>
            <ul className="list-unstyled">
              <li>
                <a href="github.com/uttejterlapu">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li>
                <a href="github.com/uttejterlapu">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
              <li>
                <a href="github.com/uttejterlapu">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* <div className="bg-primary text-center py-2">
        <Container>
          <p className="mb-0">
            &copy; 2023 DigitalSuccess Marketing. All rights reserved.
          </p>
        </Container>
      </div> */}
    </footer>
  );
}

export default Footer;
