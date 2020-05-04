import React, { useState, useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


function HomePage() {
    const [showLink, setshowLink] = useState('')

    var handleMouseOver = (id) => {
        setshowLink(id)
        console.log('hello mouse', id)
        // console.log('hello new id', newId(id))
        // var newIdTemp = newId(id)
        // document.getElementById(newIdTemp).style.display = 'flex';
        //document.getElementById(id).style.visibility = 'visible';
    }

    var handleMouseLeave = (id) => {
        setshowLink('')
        //document.getElementById(id).style.display = 'none';
        //document.getElementById(id).style.visibility = 'visible';
    }


    return (
        <div className="home">
            <div className='title'>
                <h3>ORIANE MATHET</h3>
                <h5 className="subtitle">Développeuse Web</h5>
            </div>
            {/* ====================================
RANG 1 
            ==================================== */}

            <div className='rangProjet'>
                <div className='workard' >
                    <div className="image" onMouseEnter={(e) => handleMouseOver("martina")} >
                        <img className="pic1" id='newsroom' src='./images/homepic2.jpg' alt="pic1" />
                    </div>
                    {showLink == "martina" ?
                        <a className="textCard lien_extbody" href='https://martinasquillace.herokuapp.com/' target="_blank" onMouseLeave={(e) => setshowLink('')}>
                            <h5 className='lien_extbody' id='newsroombis' >
                                Martina Squillace <p className='descriptif'>site de ecommerce pour une marque de haute couture</p> </h5>
                        </a>
                        : null}
                </div>


                <div className='workard' >
                    <div className="image" onMouseEnter={(e) => handleMouseOver('atelier')}>
                        <img className="pic1" id='camera' src='./images/atelier.jpg' alt="pic1" />
                    </div>
                    {showLink == "atelier" ?
                        <a className="textCard lien_extbody" onMouseLeave={(e) => setshowLink('')} href='https://atelier83.format.com/' target="_blank">
                            <h5 className='lien_extbody' >
                                Atelier83
                            <p className='descriptif'>site vitrine pour un espace de coworking de jeunes créateurs</p>
                            </h5>
                        </a>
                        : null}
                </div>

            </div>
            {/* ====================================
RANG 1 
            ==================================== */}

            <div className='rangProjet'>
                <div className='workard' >
                    <div className="image" onMouseEnter={(e) => handleMouseOver("newsroom")} >
                        <img className="pic1" id='newsroom' src='./images/paper7.jpeg' alt="pic1" />
                    </div>
                    {showLink == "newsroom" ?
                        <a className="textCard lien_extbody" href='https://mynewsroomapp.herokuapp.com/' target="_blank" onMouseLeave={(e) => setshowLink('')}>
                            <h5 className='lien_extbody' >
                                NewsRoom
                            <p className='descriptif'>Lire les nouvelles du jour et enregistrer ses favoris</p>
                            </h5>
                        </a>
                        : null}
                </div>


                <div className='workard' >
                    <div className="image" onMouseEnter={(e) => handleMouseOver('camera')}>
                        <img className="pic1" id='camera' src='./images/camera.jpg' alt="pic1" />
                    </div>
                    {showLink == "camera" ?
                        <a className="textCard lien_extbody" href='https://mymovizapp.herokuapp.com/' target="_blank" onMouseLeave={(e) => setshowLink('')}>
                            <h5 className='lien_extbody'>
                                My Movies
                            <p className='descriptif'>Voir les derniers films du moment et enregistrer ses favoris</p>
                            </h5>
                        </a>
                        : null}
                </div>

            </div>
            {/* ====================================
RANG 2 
            ==================================== */}

            <div className='rangProjet'>
                <div className='workard sm-6'>
                    <div className="image sm-6" onMouseEnter={(e) => handleMouseOver('alice')}>
                        <img className="pic1" id='atelier' src='./images/alice.png' alt="pic1" />
                    </div>
                    {showLink == "alice" ?
                        <a className="textCard lien_extbody" href='https://alicekantor.com' target="_blank" onMouseLeave={(e) => setshowLink('')}>
                            <h5 className='lien_extbody'>
                                Alice Kantor
                            <p className='descriptif'>Portfolio pour une journaliste multimédia</p>
                            </h5>
                        </a>
                        : null}
                </div>


                <div className='workard sm-6'>
                    <div className="image sm-6" onMouseEnter={(e) => handleMouseOver('bike')}>
                        <img className="pic1" id='mode' src='./images/bike.jpg' alt="pic1" />
                    </div>
                    {showLink == "bike" ?
                        <a className="textCard lien_extbody" href="https://orisbikeshop.herokuapp.com/" target="_blank" onMouseLeave={(e) => setshowLink('')}>
                            <h5 className='lien_extbody' >
                                Bike Shop
                            <p className='descriptif'>miniApp de vente de vélo</p>
                            </h5>
                        </a>
                        : null}
                </div>

            </div>

            {/* ====================================
RANG 3
            ==================================== */}
            {/* 
            <div className='rangProjet'>
                <div className='workard sm-6'>
                    <div className="image sm-6" onMouseEnter={(e) => handleMouseOver('mode2')}>
                        <img className="pic1" id='mode2' src='./images/imagetest.jpg' alt="pic1" />
                    </div>
                    {showLink == "mode2" ?
                        <a className='lien_extbody textCard sm-6' href='https://atelier83.format.com/' id='mode2bis' target="_blank" onMouseLeave={(e) => handleMouseLeave(e.target.id)} onClick={(e) => window.onload(e.target.href)}>
                            <h5 className="textinCard">Projet 5</h5>
                        </a>
                        : null}
                </div>


                <div className='workard sm-6'>
                    <div className="image sm-6" onMouseEnter={(e) => handleMouseOver('mode3')}>
                        <img className="pic1" id='mode3' src='./images/imagetest2.jpg' alt="pic1" />
                    </div>
                    {showLink == "mode3" ?
                        <a className='lien_extbody textCard sm-6' href='https://alicekantor.com/' id='mode3bis' target="_blank" onMouseLeave={(e) => handleMouseLeave(e.target.id)} onClick={(e) => window.onload(e.target.href)}>
                            <h5 className="textinCard">Projet 6</h5>
                        </a>
                        : null}
                </div>

            </div> */}


        </div >
    );
}

export default HomePage;