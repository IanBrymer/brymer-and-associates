import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const DentalSurgery = () => {
    return (
        <div className="App">
            <BackTo text='Back To Small Builds' link='/small'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='3vw' scaleOne='1.05' scaleTwo='2' backgroundFontSize='9vw' height='19vw' backgroundHeader="DENTAL SURGERY" header='DENTAL SURGERY'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p2' className='bigImages' src={require('../../pictures/Small/DentalSurgery/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/DentalSurgery/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/DentalSurgery/3.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/DentalSurgery/4.png')}></img>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default DentalSurgery;