import React from 'react';
import '../App.css'
import PageHeaders from '../components/pageHeaders';
import ExploreCards from '../components/exploreCards';
import { Col, Row } from 'react-bootstrap';
const Work = () => {
    return (
        <>
            <div className="App">
                {/* <header className="headerContainer">
            </header> */}
                <div className='OtherPageheader'>
                    <PageHeaders fontSize='30px' backgroundFontSize='120px' height='100vh' header='EXPLORE OUR WORK'></PageHeaders>
                </div>
            </div>
            <div className=''>
                <Row className=''>
                    <Col className='rowCol'>
                        <ExploreCards text='New Houses' immageSrc='NewHouses.png' to='/new-houses'></ExploreCards>
                        <ExploreCards text='Alterations' immageSrc='Alterations.png' to='/alterations'></ExploreCards>
                        <ExploreCards text='New Houses' immageSrc='NewHouses.png' to='/new-houses'></ExploreCards>
                    </Col>
                    <Col className='rowCol'>
                        <ExploreCards text='Commercial' immageSrc='Commercial.png' to='/commercial'></ExploreCards>
                        <ExploreCards text='Alterations' immageSrc='Alterations.png' to='/alterations'></ExploreCards>
                        <ExploreCards text='New Houses' immageSrc='NewHouses.png' to='/new-houses'></ExploreCards>
                    </Col>
                </Row>
            </div>
        </>

    );
}

export default Work;