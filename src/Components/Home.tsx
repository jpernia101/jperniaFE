import React, { useEffect, useState } from 'react';
import "../css/home.css"
import Headers from './Header.tsx';
import Container  from 'react-bootstrap/Container';
import Col  from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    
    return (
        <div >
            <Headers/>
            <div className={`video-background-container`}>
                <Container xs={12} md={6}> 
                    <Col id='#' style={{textAlign:'center'}}>
                    <h1>Welcome, my name is Jeffrey</h1>
                    </Col>
                    <Col style={{textAlign:'center'}}><h5>I'm a software engineer who currently resides in HTX.</h5></Col>
                    
                    <Col id="about" style={{marginTop:'50px'}}>
                        <h3 className='section-style'>About Me</h3>
                        <p> I'm currently a software engineer at <b>JP Morgan</b> who enjoys learning and building scalable
                        apps. Also, I like to travel and explore. 
                        </p>

                    </Col>
                    <h3 className='section-style'>Languages/Frameworks I am familiar with</h3>
                    <Row >
                     <Col xs={7}><FontAwesomeIcon  beatFade icon={faMinus} />Node/Express</Col>
                     <Col><FontAwesomeIcon  beatFade icon={faMinus} />ReactJS</Col>
                     
                    </Row>
                    <Row>
                        <Col xs={7}><FontAwesomeIcon  beatFade icon={faMinus} />Java</Col>
                        <Col><FontAwesomeIcon  beatFade icon={faMinus} />Python</Col>
                    </Row>
                    <Row>
                        <Col xs={7}><FontAwesomeIcon  beatFade icon={faMinus} />AWS(S3, Lambda, EC2, Step-Functinos)</Col>
                        <Col><FontAwesomeIcon  beatFade icon={faMinus} />GraphQL</Col>
                    </Row>
                    
                    <Col id='travel' style={{marginTop:'50px'}}>
                        <h3 className='section-style'>Travel Photos</h3>
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Image  className='carousel-image' src='/denver.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> Denver </p></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image  className='carousel-image' src='/denver2.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> Denver </p></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className='carousel-image' src='/denver3.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> Denver </p></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image  className='carousel-image' src='/DR.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> Dominican Republic </p></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image  className='carousel-image' src='/DR2.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> Dominican Republic </p></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image  className='carousel-image' src='/jamaica.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> Jamaica </p></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image  className='carousel-image' src='/nashville.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> Nashville </p></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image  className='carousel-image' src='/ny.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> New York</p></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image  className='carousel-image' src='/ny2.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> New York </p></Carousel.Caption>
                            </Carousel.Item><Carousel.Item>
                                <Image  className='carousel-image' src='/ny3.JPEG'/>
                                <Carousel.Caption><p className='carousel-caption-p'> New York </p></Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>

                        
                    </Col>
                </Container>
            </div>

        </div>
    )
}

export default Home;