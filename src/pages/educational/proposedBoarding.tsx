import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const ProposedOSCBoarding = () => {
    return (
        <div className="App">
            <BackTo text='Back To Educational Builds' link='/educational'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='3vw' scaleOne='0.92' scaleTwo='4.5' backgroundFontSize='5vw' height='19vw' backgroundHeader="PROPOSED OSC BOARDING HOUSE" header='PROPOSED OSC BOARDING HOUSE'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/ProposedOakhillBoarding/1.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/ProposedOakhillBoarding/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/ProposedOakhillBoarding/3.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/ProposedOakhillBoarding/4.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/ProposedOakhillBoarding/5.png')}></img>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default ProposedOSCBoarding;