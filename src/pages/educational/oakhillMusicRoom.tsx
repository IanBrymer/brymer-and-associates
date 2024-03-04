import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'
import { Col, Row } from 'react-bootstrap';
import BackTo from '../../components/backTo';

const OakhillMusicRoom = () => {
    return (
        <div className="App">
            <BackTo text='Back To Educational Builds' link='/educational'></BackTo>
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='3vw' scaleOne='0.92' scaleTwo='3' backgroundFontSize='7vw' height='19vw' backgroundHeader="OAKHILL MUSIC ROOM" header='OAKHILL MUSIC ROOM'></PageHeaders>
            </div>
            <div className="container">
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/OakhillMusicRoom/1.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/OakhillMusicRoom/2.png')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/OakhillMusicRoom/3.jpg')}></img>
                </div>
                <div className="full">
                    <img alt='p2' className='plans' src={require('../../pictures/Educational/OakhillMusicRoom/4.png')}></img>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default OakhillMusicRoom;