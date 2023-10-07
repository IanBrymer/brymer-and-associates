import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles.css';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';


const DefaultNavbar = () => {
    return (
        <>
            <div className="border-end bg-white" id="sidebar-wrapper">
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