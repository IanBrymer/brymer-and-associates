import React from 'react'
import TypesNavbar from '../../components/typesNavbar';
import PageHeaders from '../../components/pageHeaders';
import '../../App.css'

const WesternHead = () => {
    return (
        <div className="App">
            <div className='OtherPageheader'>
                <TypesNavbar></TypesNavbar>
                <PageHeaders fontSize='1.8rem' scaleOne='1.5rem' scaleTwo='2.5rem' backgroundFontSize='10rem' height='25vh' backgroundHeader="RIVER HOUSE" header='RIVER HOUSE'></PageHeaders>
            </div>
        </div>
    )
}

export default WesternHead;