import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../Assets/img/meter1.svg';
import meter2 from '../Assets/img/meter2.svg';
import meter3 from '../Assets/img/meter3.svg';
import colorSharp from '../Assets/img/color-sharp.png'


function Skills() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx'>
                                <h2>
                                    Skills
                                </h2>
                                <p> Web development is the process of creating and maintaining websites; <br></br>it’s the work that goes on behind the scenes to make a website appear attractive, work quickly, and provide <br/>  a consistent user experience. </p>
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="skill-slider"
                                >
                                <div className='item'>
                                    <img src={meter1} alt='Image'/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='Image'/>
                                    <h5>Web Design</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt='Image'/>
                                    <h5>Web Help</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='Image'/>
                                    <h5>Logo Design</h5>
                                </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img className='background-image-left' src={colorSharp}/>
            </section>
    )
}

export default Skills;
