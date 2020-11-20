import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/profile.jpg'
import "./about.style.css";

const About = () => {
    return (
        <div id='about'>
           <div className='about'>
            <h1 className='pt-3 text-center font-details pb-3'>About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">

                  {/*Profile picture*/}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid/>
                        </Row>
                    </Col>

                   {/*About me description*/}
                    <Col xs={12} md={6}>
                         
                    </Col>

                </Row>
            </Container>
        </div>
     </div> 
    )
}

export default About
