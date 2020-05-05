import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container className='container' >
            <Row className='row'>
                <Col className='aboutPic' md="6" sm="12">
                    <img className='mePic' src='./images/Ori.jpeg' />
                </Col>
                <Col className='aboutText' md="6" sm="12">
                    <h3 style={{ fontSize: 20 }}>Oriane Mathet</h3>
                    <h4 style={{ color: '#778899', fontSize: 18, marginBottom: 35, marginLeft: 20 }}>Développeuse Web</h4>
                    <h5 style={{ textAlign: 'justify', fontSize: 14 }}>Après sept ans d’expérience à un poste de Styliste en Lingerie et Balnéaire, j'ai décidé de me reconvertir dans le développement web.<br></br>
                        Suite une formation intensive en développement web fullstack à La Capsule, je me suis perfectionnée dans le language JavaScript.
                        Je maîtrise Node.js, React.js et React Native, et je suis en permanence en quête de nouveautés pour parfaire mes connaissances.<br></br>
                        Souriante, je suis très investie dans mon travail et je ferais une collaboratrice assidue.<br></br>
                        N'hésitez pas à me contacter pour faire de beaux projets ensemble !</h5>
                    {/* <h5 style={{ fontSize: 14 }}>Mes Compétences : </h5> */}
                    <div className='skillsTitle'>
                        <img className='skills' src='./images/js.jpg' />
                        <img className='skills' src='./images/nodexpress.png' />
                        <img className='skills' src='./images/react.jpg' />
                        <img className='skills' src='./images/reactnative.jpg' />
                    </div>
                    <div className='skillsTitle'>
                        {/* <img className='skills' src='./images/node.png' /> */}
                        <img className='skills' src='./images/mongodb.jpg' />
                        <img className='skills' src='./images/GraphQL.png' />
                        <img className='skills' src='./images/sql.png' />
                        <img className='skills' src='./images/git.png' />
                    </div>
                    <h5 style={{ color: '#778899', fontSize: 14, marginTop: 35, marginBottom: 35 }}>Pour plus d'infos :
                    <Link to="/CV Mathet Oriane.pdf" className="downloadCv" target="_blank" download> Télécharger mon CV</Link>
                    </h5>

                </Col>
            </Row>

        </Container>
    )
}

export default About;