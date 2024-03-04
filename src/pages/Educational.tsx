import React from 'react';
import '../App.css'
import { Col, Nav, Row } from 'react-bootstrap';
import HouseCards from '../components/houseCards';
import TypesNavbar from '../components/typesNavbar';
import PageHeaders from '../components/pageHeaders';

const Educational = () => {
    return (
        <>
            <div className="App">
                <div className='OtherPageheader'>
                    <TypesNavbar></TypesNavbar>
                    <PageHeaders fontSize='1.8rem' scaleOne='1.5' scaleTwo='2.5' backgroundFontSize='6rem' height='40vh' backgroundHeader="EDUCATIONAL" header='EXPLORE A FEW OF OUR EDUCATIONAL BUILDS'></PageHeaders>
                    <Row className='px-2' style={{ height: 'auto', width: '95%' }}>
                        <Col >
                            <p className='paragraphs'>Educational buildings are our passion, as improving the learning environment for scholars leads to a better educational outcome for both teachers and learners. We have designed and upgraded many school building, administrative building and libraries in Knysna and Concordia.</p>
                        </Col>
                        <Col>
                            <p className='paragraphs'> We have also played an integral part in designing and supervising the upgrades to sporting facilities including Astro Turf hockey fields, netball and tennis courts, swimming/water polo pools, club house design, cricket and rugby fields.</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='pb-5 pt-3'>
                <Row className='w-100 d-flex justify-content-around'>
                    <Col>
                        <Nav.Link href='/educational/proposed-imad-center'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/ProposedIMADCenter.png' houseName='Proposed IMAD Center' paragraph='A contemporary theatre, arts and drama building, designed with concrete, glass and “green” walls to reflect the progressive nature of the school’s ethos.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href='/educational/proposed-osc-boarding-house'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/ProposedOSCBoarding.png' houseName='Proposed OSC Boarding House' paragraph='A textured design for young people with glass, concrete and steel cladding to create a modern and airy living space.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href='/educational/oakhill-learning-commons'>
                            <HouseCards paddingTop='0px' imageSrc='HouseCards/OakhillLearningCommons.jpg' houseName='Oakhill Learning Commons' paragraph='The joy of learning.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
                <Row className='w-75 d-flex justify-content-around'>
                    <Col>
                        <Nav.Link href='/educational/masefunde-library'>
                            <HouseCards paddingTop='50px' imageSrc='HouseCards/MasefundeLibrary.jpg' houseName='Masefunde Library' paragraph='This building was designed with the emphasis on local community and low maintenance but also to reflect the colourful environment surrounding the centre.'></HouseCards>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href='/educational/oakhill-music-room'>
                            <HouseCards paddingTop='50px' imageSrc='HouseCards/OakhillMusicRoom.jpg' houseName='Oakhill Music Room' paragraph='A take on container architecture to reflect the forward thinking ethos of the school, this building addition was constructed in timber and metal cladding.'></HouseCards>
                        </Nav.Link>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Educational;