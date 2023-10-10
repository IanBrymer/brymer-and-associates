import React from 'react';
import '../styles/footer.css'
import { Col, Nav, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footerBody'>
            <Row>
                <Col className='Backwards'><img className='p-5' src={require("../pictures/footer/BRYMER & ASSOCIATES.png")}></img></Col>
                <Col className='menu'>
                    <Nav.Link className='w-50' href='/'>HOME</Nav.Link>
                    <Nav.Link className='w-50' href="/our-work">OUR WORK</Nav.Link>
                    <Nav.Link className='w-50' href="/contact-us">CONTACT US</Nav.Link>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;