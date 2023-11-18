import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const RiverHouse = () => {
    return (
        <div className="App">
            <BackTo text='Back To New Houses' link='/new-houses'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='1.8rem' scaleOne='1.5rem' scaleTwo='2.5rem' backgroundFontSize='10rem' height='25vh' backgroundHeader="RIVER HOUSE" header='RIVER HOUSE'></PageHeaders>
            </div>
            <div className="full">
                <img alt='p1' className='bigImages' src={require('../../pictures/NewHouses/PezulaFynbos/1.jpg')}></img>
            </div>
            <div className="full">
                <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/PezulaFynbos/2.png')}></img>
            </div>
            <div className="full">
                <Row className='twoRow'>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaFynbos/3.jpg')}></img></Col>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaFynbos/4.jpg')}></img></Col>
                </Row>
            </div>
            <div className="full">
                <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/PezulaFynbos/5.jpg')}></img>
            </div>
            <div className="full">
                <Row className='twoRow'>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaFynbos/6.jpg')}></img></Col>
                    <Col className='p-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/PezulaFynbos/7.png')}></img></Col>
                </Row>
            </div>
            <div className="full">
                <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/PezulaFynbos/8.png')}></img>
            </div>
        </div>
    )
}

export default RiverHouse;
