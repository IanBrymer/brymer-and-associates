import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const HouseCards = (props: { imageSrc: string, houseName: string, paragraph: string, paddingTop: string }) => {


    return (
        <Col className='d-flex justify-content-center' style={{ paddingTop: props.paddingTop }}>
            <Card style={{ width: '28rem', height: 'min-content' }}>
                <Card.Img style={{ overflow: 'hidden' }} variant="top" src={require(`../pictures/HouseCards/${props.imageSrc}`)} />
                <Card.Body>
                    <Card.Title>{props.houseName}</Card.Title>
                    <Card.Text>
                        {props.paragraph}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default HouseCards;