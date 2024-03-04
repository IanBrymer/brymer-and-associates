import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const OSCPavillion = () => {
    return (
        <div className="App">
            <BackTo text='Back To Small Builds' link='/small'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='3vw' scaleOne='1.1' scaleTwo='2' backgroundFontSize='10vw' height='19vw' backgroundHeader="OSC PAVILLION" header='OSC PAVILLION'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/OSCPavillion/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/OSCPavillion/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/OSCPavillion/3.png')}></img>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default OSCPavillion;