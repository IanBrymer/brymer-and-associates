import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/navbar.css';



const DefaultNavbar = () => {
    return (
        <>
            <div className="position-fixed end-0">
                <div className="list-group-flush">
                    <Nav.Link className="linkText list-group-item list-group-item-action list-group-item-light px-3" href='/'>HOME</Nav.Link>
                    <Nav.Link className="linkText list-group-item list-group-item-action list-group-item-light px-3" href="/our-work">OUR WORK</Nav.Link>
                    <Nav.Link className="linkText list-group-item list-group-item-action list-group-item-light px-3" href="/contact-us">CONTACT US</Nav.Link>
                </div>
            </div>
        </>
    );
}

export default DefaultNavbar;