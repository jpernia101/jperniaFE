import React from 'react';
import "../css/home.css"
import {useNavigate} from 'react-router-dom'
const Home = () => {

    // const navigate = useNavigate();

    // const handclick = (url) => {
    //     navigate(url);
    // }
    return (
        <div className='video-background-container'>
            <div className='content'>
                <h1>Jeffrey Pernia</h1>
            </div>
            <div >
                <a href='https://github.com/jpernia101' target='_blank' rel='noopener noreferrer'>
                    <img className='icons' src='/github.png'/>
                </a>
                <h3>Github</h3>
            </div>
            
            <video className='background-video' autoPlay loop muted>
                {/* media in the public folder can be referenced with just the / */}
                <source src="/bg1.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Home;