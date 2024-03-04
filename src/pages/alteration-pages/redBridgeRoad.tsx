import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const RedBridgeRoad = () => {
    return (
        <div className="App">
            <BackTo text='Back To Alterations' link='/alterations'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='4vw' scaleOne='1.5' scaleTwo='4.0' backgroundFontSize='6vw' height='19vw' backgroundHeader="RED BRIDGE ROAD" header='RED BRIDGE ROAD'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/RedBridgeRoad/1.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/RedBridgeRoad/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Alterations/RedBridgeRoad/3.png')}></img>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default RedBridgeRoad;