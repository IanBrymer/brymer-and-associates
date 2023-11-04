import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/navbar.css';
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackTo = (props: { text: string, link: string }) => {
    return (
        <div className="position-fixed start-0">
            <div className="list-group-flush">
                <AiOutlineArrowLeft></AiOutlineArrowLeft>
                <Nav.Link className="backTo list-group-item list-group-item-action list-group-item-light px-3" href={props.link}>{props.text}</Nav.Link>
            </div>
        </div>
    );
}

export default BackTo;