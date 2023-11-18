import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const KennetStreet = () => {
    return (
        <div className="App">
            <BackTo text='Back To New Houses' link='/new-houses'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='5vw' scaleOne='1' scaleTwo='2.5' backgroundFontSize='10vw' height='19vw' backgroundHeader="KENNET STREET" header='KENNET STREET'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p1' style={{ width: '100%' }} src={require('../../pictures/NewHouses/KennetStreet/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/KennetStreet/2.png')}></img>
                </div>
                <div className="full">
                    <Row className='twoRow'>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/KennetStreet/3.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/KennetStreet/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row className='twoRow'>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/KennetStreet/5.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/KennetStreet/6.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <Row className='twoRow'>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/KennetStreet/7.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/NewHouses/KennetStreet/8.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/NewHouses/KennetStreet/9.png')}></img>
                </div>
            </div>
        </div>
    )
}

export default KennetStreet;