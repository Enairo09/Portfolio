import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import PopUpMsg from '../PopUp/PopUpMsg';

function Contact() {
    const [form, setform] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [popUp, setpopUp] = useState(false);

    var handleForm = (e) => {
        (e).preventDefault()
        console.log('envoi formulaire', form);
        fetch('api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `name=${form.name}&email=${form.email}&message=${form.message}`
        }).then((response) => response.json()).then(function (data) {
            console.log('this message is saved', data.msg)
            if (data.msg === 'success') {
                setpopUp(true)
            } else {

            }
        })
            .catch(function (error) { console.log('error', error) });
        //<input type='button' onclick="self.location.href='mailto:moi@chezmoi.ici'" value="vas y envoie toi un mail avec ta messagerie" />
    }

    return (
        <Container className='container' >
            {popUp ? <PopUpMsg /> : null}
            <Row style={{ height: 60 }}>
                <h3 style={{ fontSize: 20, marginLeft: 20 }}>Contact Me</h3>
            </Row>
            <Row className='row'>
                <Col className='aboutPic' md="6" sm="12">
                    <img className='contactPic' src='./images/type.jpg' />
                </Col>
                <Col className='contactText' md="6" sm="12">
                    <form className="contactForm" onSubmit={(e) => handleForm(e)} >

                        <input className='input' type='text' placeholder='Name' onChange={(e) => setform({ ...form, name: e.target.value })} required></input>

                        <input className='input' type='email' placeholder='Email' onChange={(e) => setform({ ...form, email: e.target.value })} required></input>

                        <textarea className='input inputArea' placeholder='Message' onChange={(e) => setform({ ...form, message: e.target.value })} required />

                        <button className='contactButton' type="submit" >Send</button>

                    </form>
                </Col>
            </Row>
        </Container >
    )
}

export default Contact;