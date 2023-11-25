import React from 'react';
import Nav from 'react-bootstrap/Nav';




const DefaultNavbar = () => {
    return (
        <>
            <div className="position-fixed top-50  end-0 translate-middle-y">
                <div className="list-group">
                    <Nav.Link className="linkText h-25 list-group-item list-group-item-action list-group-item-light px-3" href='/' style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', display: 'flex', justifyContent: 'center' }}>HOME</Nav.Link>
                    <Nav.Link className="linkText h-25 list-group-item list-group-item-action list-group-item-light px-3" href="/our-work" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', display: 'flex', justifyContent: 'center' }}>OUR WORK</Nav.Link>
                    <Nav.Link className="linkText h-25 list-group-item list-group-item-action list-group-item-light px-3" href="/contact-us" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', display: 'flex', justifyContent: 'center' }}>CONTACT US</Nav.Link>
                </div>
            </div>
        </>
    );
}

export default DefaultNavbar;