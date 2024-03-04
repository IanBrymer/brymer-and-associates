import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

//src\pictures\Commercial\ProposedDentistry\1.jpg

const ProposedDentistry = () => {
    return (
        <div className="App">
            <BackTo text='Back To Commercial' link='/commercial'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='4vw' scaleOne='1.5' scaleTwo='4' backgroundFontSize='5vw' height='20vw' backgroundHeader="PROPOSED DENTISTRY" header='PROPOSED DENTISTRY'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p1' className='bigImages' src={require('../../pictures/Commercial/Dentistry/1.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Commercial/Dentistry/2.png')}></img>
                </div>
                <div className="full">
                    <Row>
                        <Col xs={12} md={6} className='tpr-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Commercial/Dentistry/3.png')}></img></Col>
                        <Col xs={12} md={6} className='tpl-1'><img alt='p2' className='twoColumnImage' src={require('../../pictures/Commercial/Dentistry/4.png')}></img></Col>
                    </Row>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default ProposedDentistry;