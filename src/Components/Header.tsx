import React from 'react'
import  Container  from 'react-bootstrap/Container';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "../css/header.css"


const Headers = () => {
    return(
        <Navbar expand="lg" style={{backgroundColor:'rgba(0, 40, 50, 0.6)'}}>
            <Container className='px-2'>
                <Navbar.Brand href='#' className='font-color'>
                    JP
                </Navbar.Brand>
                <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="me-auto" id='basic-navbar-nav'>
                    <Nav className="me-auto font-color" >
                        <Nav.Link className='font-color' href="#about">About Me</Nav.Link>
                        {/* <Nav.Link className='font-color' href="#projects">Projects</Nav.Link> */}
                        <Nav.Link className='font-color' href="#travel">Travel</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto font-color" >
                        <Nav.Link className='font-color' href='https://linkedin.com/in/jeffrey-pernia'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Nav.Link>
                        <Nav.Link className='font-color' href='https://github.com/jpernia101'>
                            <FontAwesomeIcon icon={faGithub} />
                        </Nav.Link>
                        {/* <Nav.Link href="#contact"><h6 className='font-color'>Email</h6></Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Headers;