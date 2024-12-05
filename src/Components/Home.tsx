import React, { useEffect, useState } from 'react';
import "../css/home.css"
import {useNavigate} from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {

    // const navigate = useNavigate();

    // const handclick = (url) => {
    //     navigate(url);
    // }
    const [timestamp,setTimeStap]= useState<string>("");
    const [showPhotos,setShowPhotos]= useState<boolean>(false);
    
    const grabTime = () => {
       const intervalId =  setInterval( () => {
            let currTime: Date = new Date();
            let stringDate: string = `${currTime.getHours()}:${currTime.getMinutes()}`
            setTimeStap( stringDate )
        }, 10000)

        return intervalId
    }

    useEffect( () => {
        const intervalId = grabTime();
        // clearInterval(intervalId);
    })

    const showModal = () => {
        setShowPhotos(true);
        console.log('here');
    }

    const carouselSettings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };

    return (
        <div className='video-background-container'>
            <div className='content'>
                <h1>Jeffrey Pernia</h1>
            </div>
            <div className='left-third-styling'>

                <div className='icon-label-wrapper'>
                    <a href='https://github.com/jpernia101' target='_blank' rel='noopener noreferrer'>
                        <img className='icons' src='/github.png'/>
                    </a>
                    <h3 className='label'>Github</h3>
                </div>

                <div className='icon-label-wrapper'>
                    <a href='https://linkedin.com/in/jeffrey-pernia' target='_blank' rel='noopener noreferrer'>
                        <img className='icons' src='/linkedin.png'/>
                    </a>
                    <h3 className='label'>LinkedIn</h3>
                </div>
                <div className='icon-label-wrapper'>
                        <img className='icons' src='/gallery.png' onClick={() => showModal()}/>
                    <h3 className='label'>Travel Photos</h3>
                </div>
            </div>

            { showPhotos && 
              <Slider  className='carousel' {...carouselSettings}>
                <div>
                    <img  style={{width: '100%'}} src='/temp2.png'/>
                </div>
                <div>
                    <img style={{width: '100%'}} src='/temp1.png'/>
                </div>
              </Slider>
            }
            
                    
            
            <video className='background-video' autoPlay loop muted>
                {/* media in the public folder can be referenced with just the / */}
                <source src="/bg1.mp4" type="video/mp4" />
            </video>


            <div className='footer'>
                <p>{timestamp}</p>
            </div>
        </div>
    )
}

export default Home;