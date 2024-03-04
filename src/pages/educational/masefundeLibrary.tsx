import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const MasefundeLibrary = () => {
    return (
        <div className="App">
            <BackTo text='Back To Educational Builds' link='/educational'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='3vw' scaleOne='0.92' scaleTwo='2.5' backgroundFontSize='7vw' height='19vw' backgroundHeader="MASEFUNDE LIBRARY" header='MASEFUNDE LIBRARY'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/Educational/MasefundeLibrary/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/MasefundeLibrary/2.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Educational/MasefundeLibrary/3.jpg')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Educational/MasefundeLibrary/4.jpg')}></img></Col>
                    </Row>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/MasefundeLibrary/5.png')}></img>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default MasefundeLibrary;