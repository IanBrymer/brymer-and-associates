import React from 'react';
import '../styles/footer.css'
import { Col, Nav, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div className='footerBody'>
            </div>
            <div className='footerWritingContainer'>
                <Col className='Backwards'><img className='p-5 backwardImage' src={require("../pictures/footer/BRYMER & ASSOCIATES.png")}></img></Col>
                <Col className='menu'>
                    <Nav.Link href='/'>HOME</Nav.Link>
                    <Nav.Link href="/our-work">OUR WORK</Nav.Link>
                    <Nav.Link href="/contact-us">CONTACT US</Nav.Link>
                </Col>
            </div>
        </>
    );
}

export default Footer;