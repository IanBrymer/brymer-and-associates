import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const AndrewAve = () => {
    return (
        <div className="App">
            <BackTo text='Back To New Houses' link='/new-houses'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='5vw' scaleOne='1.5' scaleTwo='2.5' backgroundFontSize='6.5vw' height='19vw' backgroundHeader="ANDREW AVENUE" header='ANDREW AVENUE'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/NewHouses/AndrewAve/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/AndrewAve/2.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/AndrewAve/3.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/AndrewAve/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/AndrewAve/5.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/AndrewAve/6.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/AndrewAve/7.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/NewHouses/AndrewAve/8.png')}></img>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default AndrewAve;