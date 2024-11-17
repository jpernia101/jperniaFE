import React, { useEffect, useState } from 'react';
import "../css/home.css"
import {useNavigate} from 'react-router-dom'
const Home = () => {

    // const navigate = useNavigate();

    // const handclick = (url) => {
    //     navigate(url);
    // }
    const [timestamp,setTimeStap]= useState<string>("");
    
    const grabTime = () => {
       const intervalId =  setInterval( () => {
            let currTime: Date = new Date();
            let stringDate: string = `${currTime.getHours()}:${currTime.getMinutes()}`
            setTimeStap( stringDate )
        }, 60000)

        return intervalId
    }

    useEffect( () => {
        const intervalId = grabTime();
        clearInterval(intervalId);
    }, [])

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
                
            </div>
            
                    
            
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