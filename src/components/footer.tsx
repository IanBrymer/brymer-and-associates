import React from 'react';
import '../styles/footer.css'
import { Col, Nav, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Row className='footerContainer'>
                <Col className='basContainer' style={{ backgroundColor: '#E4ECF5' }}>
                    <div className='bas'>Brymer &<br></br>Associates</div>
                </Col>
                <Col className='menu' style={{ backgroundColor: '#C5D2E1' }}>
                    <div className='menuContainer'>
                        <div className='column'>
                            <Nav.Link href='/'>HOME</Nav.Link>
                            <Nav.Link href="/our-work">OUR WORK</Nav.Link>
                            <Nav.Link href="/our-work">OUR WORK</Nav.Link>
                        </div>
                        <div className='column'>
                            <Nav.Link href='/'>HOME</Nav.Link>
                            <Nav.Link href="/our-work">OUR WORK</Nav.Link>
                            <Nav.Link href="/contact-us">CONTACT US</Nav.Link>
                        </div>
                    </div>
                </Col>
            </Row >
        </>
    );
}

export default Footer;