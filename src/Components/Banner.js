import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../Assets/img/header-img.svg';

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["web developer", "web designer", "Ui/Ux designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval (() => {
           tick(); 
        },delta)
        return () => { clearInterval(ticker)};
    },[text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1 );
            setDelta(500);
        }

    }

    return (
        <div>
            <section className='banner' id='home'>
                <Container>
                    <Row className='align-item-center'>
                        <Col xs={12} md={6} xl={7}>
                            <span className='tagline'>Welcome to My Portfolio</span>
                            <h1>{` Hii I am web coded `} <span className='wrap'>{text}</span></h1>
                            <p> My name is Prashant Maurya a great Web developer Learning new things</p>
                            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /> </button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Banner;
