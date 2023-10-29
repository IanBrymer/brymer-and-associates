import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const HouseCards = (props: { imageSrc: string, houseName: string, paragraph: string, paddingTop: string }) => {


    return (
        <Col className='d-flex justify-content-center' style={{ paddingTop: props.paddingTop }}>
            <Card style={{ width: '28rem', height: 'min-content', borderRadius: '0 0 0 0' }}>
                <Card.Img style={{ overflow: 'hidden', borderRadius: '0 0 0 0' }} variant="top" src={require(`../pictures/${props.imageSrc}`)} />
                <Card.Body style={{ backgroundColor: '#E4ECF5' }}>
                    <Card.Title className='houseCardHeadings'>{props.houseName}</Card.Title>
                    <Card.Text className='houseCardParagraphs'>
                        {props.paragraph}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default HouseCards;