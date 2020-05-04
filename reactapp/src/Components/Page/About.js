import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container className='container' >
            <Row className='row'>
                <Col className='mePic' md="6">
                    {/* <img style={{ objectFit: 'contain', padding: 5, maxHeight: 300 }} src='./images/Ori.jpeg' /> */}
                </Col>
                <Col className='aboutText' md="6">
                    <h3 style={{ fontSize: 20, marginLeft: 20 }}>Oriane Mathet</h3>
                    <h4 style={{ color: '#778899', fontSize: 18, marginBottom: 35, marginLeft: 20 }}>Développeuse Web</h4>
                    <h5 style={{ textAlign: 'justify', fontSize: 14, marginLeft: 20 }}>Après sept ans d’expérience à un poste de Styliste en Lingerie et Balnéaire, je suis désormais en reconversion professionnelle et cherche actuellement un emploi en développement web.<br></br>
                        Après une formation de 10 semaines en développement web fullstack à La Capsule, je développe désormais des sites web en JavaScript, et React.js. Je peux également développer des applications en React Native.<br></br>
                        Souriante, je suis très investie dans mon travail et je ferais une collaboratrice assidue.<br></br>
                        N'hésitez pas à me contacter pour faire de beaux projets ensemble !</h5>
                    <h5 style={{ color: '#778899', fontSize: 14, margin: 35 }}>Pour plus d'infos :
                    <Link to="/CV Mathet Oriane.pdf" className="downloadCv" target="_blank" download>Télécharger mon CV</Link>
                    </h5>

                </Col>
            </Row>

        </Container>
    )
}

export default About;