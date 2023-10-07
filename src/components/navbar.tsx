import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles.css';


const DefaultNavbar = () => {
    return (
        <>
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="list-group-flush justify-content-around d-flex">
                    <a className="linkText list-group-item list-group-item-action p-3" href="#!">HOME</a>
                    <a className="linkText list-group-item list-group-item-action p-3" href="#!">CONTACT US</a>
                    <a className="linkText list-group-item list-group-item-action p-3" href="#!">OUR WORK</a>
                </div>
            </div>
        </>
    );
}

export default DefaultNavbar;