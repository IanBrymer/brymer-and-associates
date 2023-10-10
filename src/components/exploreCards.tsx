import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';

const ExploreCards = (props: { immageSrc: string, text: string, to: string }) => {
    return (
        <>
            <Row className='pt-5 d-flex justify-content-center overflow-hidden h-100'>
                <Nav.Link className='h-100' href={props.to}>
                    <Col className='d-flex h-100 justify-content-start align-items-start'><img className='exploreRowCard' alt={props.text} src={require(`../pictures/explore/${props.immageSrc}`)}></img> <p className='exploreP alignEverythingCenter px-4' style={{ padding }}>{props.text}</p></Col>
                </Nav.Link>
            </Row>
        </>
    );
}

export default ExploreCards;