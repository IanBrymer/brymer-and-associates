import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const KennetStreetCottage = () => {
    return (
        <div className="App">
            <BackTo text='Back To Small Builds' link='/small'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='3vw' scaleOne='1.1' scaleTwo='3' backgroundFontSize='5.7vw' height='19vw' backgroundHeader="KENNET STREET COTTAGE" header='KENNET STREET COTTAGE'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/KennetStreetCottage/1.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/KennetStreetCottage/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Small/KennetStreetCottage/3.png')}></img>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default KennetStreetCottage;