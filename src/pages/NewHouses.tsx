import React from 'react';
import ExploreCards from '../components/exploreCards';
import PageHeaders from '../components/pageHeaders';
import { Col, Row } from 'react-bootstrap';
import HouseCards from '../components/houseCards';
const NewHouses = () => {
    return (
        <div className="App w-100">
            <div className='OtherPageheader'>
                <PageHeaders scaleOne='1.3' scaleTwo='2.5' fontSize='30px' backgroundFontSize='140px' height='55vh' backgroundHeader="NEW HOUSES" header='EXPLORE A FEW OF OUR NEW HOUSES'></PageHeaders>
                <Row className='w-75'>
                    <Col><p className='paragraphs'>Our portfolio of homes designed over the last 30 years is very diverse. We do not favour one architectural style over another and rather concentrate on delivering a well-designed house in our clients preferred style and budget. Although most of our work is concentrated in Knysna, Plettenberg Bay and the Garden Route area, we have completed commissions all over the country, as well as internationally where we have worked in Zimbabwe and Switzerland.</p></Col>
                    <Col><p className='paragraphs'>The building environment is ever changing, with new products and systems entering the market daily. We spend a great deal of time evaluating these systems and discussing them with the suppliers to identify systems that will enhance, rather than hinder, our client’s lifestyle. We generally wait for systems to be tried and tested before recommending them. Buildings are becoming “greener” and more energy efficient and it is important to use modern systems to enhance the buildings efficiency, but this must be balanced against ease of use and fit into the desired lifestyle choices of our clients</p></Col>
                </Row>
            </div>
            <div className='w-100 d-flex justify-content-around'>
                <HouseCards paddingTop='35px' imageSrc='RiverHouse.jpg' houseName='River House' paragraph='A simple stone, glass and steel construction designed to create a contemporary and relaxed holiday home in nature. The dwelling has been constructed on a raised stone and steel support structure to accommodate the Knysna River 100 year flood levels.'></HouseCards>
                <HouseCards paddingTop='50px' imageSrc='Gradient.jpg' houseName='Gradient' paragraph='A contemporary off-shutter concrete, steel and glass design. The South facing home was designed around central court yards to allow North sun into the living spaces, as well as to allow for outdoor protected areas from harsh coastal weather conditions.'></HouseCards>
                <HouseCards paddingTop='0px' imageSrc='Swartvlei.jpg' houseName='Swartvlei' paragraph='An eclectic and organic design arranged centrally over a circular water feature giving this unique design an African Zen feeling.'></HouseCards>
            </div>
            <div className='w-100 d-flex justify-content-around'>
                <HouseCards paddingTop='10px' imageSrc='RiverHouse.jpg' houseName='House CoCraft' paragraph='A simple stone, glass and steel construction designed to create a contemporary and relaxed holiday home in nature. The dwelling has been constructed on a raised stone and steel support structure to accommodate the Knysna River 100 year flood levels.'></HouseCards>
                <HouseCards paddingTop='25px' imageSrc='RiverHouse.jpg' houseName='House CoCraft' paragraph='A simple stone, glass and steel construction designed to create a contemporary and relaxed holiday home in nature. The dwelling has been constructed on a raised stone and steel support structure to accommodate the Knysna River 100 year flood levels.'></HouseCards>
                <HouseCards paddingTop='0px' imageSrc='RiverHouse.jpg' houseName='House CoCraft' paragraph='A simple stone, glass and steel construction designed to create a contemporary and relaxed holiday home in nature. The dwelling has been constructed on a raised stone and steel support structure to accommodate the Knysna River 100 year flood levels.'></HouseCards>
            </div>
            <div className='w-100 d-flex justify-content-around'>
                <HouseCards paddingTop='1px' imageSrc='RiverHouse.jpg' houseName='House CoCraft' paragraph='A simple stone, glass and steel construction designed to create a contemporary and relaxed holiday home in nature. The dwelling has been constructed on a raised stone and steel support structure to accommodate the Knysna River 100 year flood levels.'></HouseCards>
                <HouseCards paddingTop='25px' imageSrc='RiverHouse.jpg' houseName='House CoCraft' paragraph='A simple stone, glass and steel construction designed to create a contemporary and relaxed holiday home in nature. The dwelling has been constructed on a raised stone and steel support structure to accommodate the Knysna River 100 year flood levels.'></HouseCards>
                <HouseCards paddingTop='0px' imageSrc='RiverHouse.jpg' houseName='House CoCraft' paragraph='A simple stone, glass and steel construction designed to create a contemporary and relaxed holiday home in nature. The dwelling has been constructed on a raised stone and steel support structure to accommodate the Knysna River 100 year flood levels.'></HouseCards>
            </div>
        </div >
    );
}

export default NewHouses;