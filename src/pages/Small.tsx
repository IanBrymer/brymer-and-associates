import React from 'react';
import TypesNavbar from '../components/typesNavbar';
import PageHeaders from '../components/pageHeaders';
import { Col, Row } from 'react-bootstrap';
import '../App.css'
const Small = () => {
    return (
        <>
            <div className="App">
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='1.8rem' scaleOne='1.5rem' scaleTwo='2.5rem' backgroundFontSize='6rem' height='40vh' backgroundHeader="SMALL BUILDS" header='EXPLORE A FEW OF OUR SMALL BUILDS'></PageHeaders>
                    <Row className='px-2' style={{ height: '60vh', width: '95%' }}>
                        <Col >
                            <p className='paragraphs'>Our portfolio of homes designed over the last 30 years is very diverse. We do not favour one architectural style over another and rather concentrate on delivering a well-designed house in our clients preferred style and budget. Although most of our work is concentrated in Knysna, Plettenberg Bay and the Garden Route area, we have completed commissions all over the country, as well as internationally where we have worked in Zimbabwe and Switzerland.</p>
                        </Col>
                        <Col>
                            <p className='paragraphs'>The building environment is ever changing, with new products and systems entering the market daily. We spend a great deal of time evaluating these systems and discussing them with the suppliers to identify systems that will enhance, rather than hinder, our client’s lifestyle. We generally wait for systems to be tried and tested before recommending them. Buildings are becoming “greener” and more energy efficient and it is important to use modern systems to enhance the buildings efficiency, but this must be balanced against ease of use and fit into the desired lifestyle choices of our clients</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Small;