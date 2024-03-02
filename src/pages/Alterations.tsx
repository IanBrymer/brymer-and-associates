import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import HouseCards from '../components/houseCards';
import TypesNavbar from '../components/typesNavbar';
import PageHeaders from '../components/pageHeaders';

import '../App.css'
const Alterations = () => {
    return (
        <>
            <div className="App">
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='2rem' scaleOne='1' scaleTwo='1.5' backgroundFontSize='15rem' height='400px' backgroundHeader="Alterations" header='EXPLORE A FEW OF OUR Alterations'></PageHeaders>
                    <Row className='px-2' style={{ height: 'min-content', marginBottom: '20px', width: '95%' }}>
                        <Col >
                            <p className='paragraphs'>Our portfolio of homes designed over the last 30 years is very diverse. We do not favour one architectural style over another and rather concentrate on delivering a well-designed house in our clients preferred style and budget. Although most of our work is concentrated in Knysna, Plettenberg Bay and the Garden Route area, we have completed commissions all over the country, as well as internationally where we have worked in Zimbabwe and Switzerland.</p>
                        </Col>
                        <Col>
                            <p className='paragraphs'>The building environment is ever changing, with new products and systems entering the market daily. We spend a great deal of time evaluating these systems and discussing them with the suppliers to identify systems that will enhance, rather than hinder, our client’s lifestyle. We generally wait for systems to be tried and tested before recommending them. Buildings are becoming “greener” and more energy efficient and it is important to use modern systems to enhance the buildings efficiency, but this must be balanced against ease of use and fit into the desired lifestyle choices of our clients</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='pb-5 pt-3'>
                <Row className='w-100 d-flex justify-content-around'>
                    <Col>
                        <Nav.Link href='/alterations/ibis-island'>
                            <HouseCards paddingTop='35px' imageSrc='HouseCards/IbisIsland.jpg' houseName='Ibis Island' paragraph='The original house was extensively altered, upgraded and modernized to create flow by connecting the various living spaces and to take full advantage of the 360 degree views afforded to Island living.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href='/alterations/hillview-crescent'>
                            <HouseCards paddingTop='50px' imageSrc='HouseCards/HillViewCrescent.jpg' houseName='Hillview Crescent' paragraph='The existing steeply pitched roof was opened up with contemporary dormers to allow for additional space and light to the first floor areas. Concrete slabs were introduced to link existing spaces and the ground floor was re-designed to create an open-plan contemporary living space.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href='/alterations/horn-drive'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/HornDrive.jpg' houseName='Horn Drive' paragraph='This alteration entailed removing most of the existing walls to create an open, seamless contemporary living space. The second story, utilizing roof space, reduces the scale of the building and compliments its environmental setting. Black aluminium and steel internal windows and doors are a feature of this simple, elegant and contemporary family home.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
                <Row className='w-100 d-flex justify-content-between'>
                    <Col>
                        <Nav.Link href='/alterations/cearn-drive'>
                            <HouseCards paddingTop='20px' imageSrc='HouseCards/CearnDrive.png' houseName='Cearn Drive' paragraph='The alteration paid homage to this beautiful old classical home with teak windows and doors and traditional slate roof. All additions copied the original style and detailing to enhance the living spaces without detracting from the elegance of this listed building.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href='/alterations/red-bridge-road'>
                            <HouseCards paddingTop='20px' imageSrc='HouseCards/RedBridgeRoad.png' houseName='Red Bridge Road' paragraph='The extensive additions and alterations to this original classical home were done to maintain the sense of style but modernise the spaces and open up the house to the beautiful Knysna river views, creating a modern classical-contemporary home.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Alterations;