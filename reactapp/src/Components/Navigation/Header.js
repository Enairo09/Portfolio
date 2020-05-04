import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../../App.css';


function Header() {
    // function open_ext_link() {
    //     var liens = document.getElementsByTagName('a');
    //     // On récupère tous les liens du document dans une variable liens.
    //     // Une boucle qui parcourt le tableau (array) liens du début à la fin
    //     for (var i = 0; i < liens.length; ++i) {
    //         // Si les liens ont un nom de class égal à lien_ext, alors on agit
    //         if (liens[i].className == 'lien_ext') {
    //             liens[i].title = 'S\'ouvre dans une nouvelle fenêtre';
    //             // Au clic de la souris.
    //             liens[i].onclick = function () {
    //                 // On ouvre une nouvelle page ayant pour URL
    //                 // l'attribut href du lien cliqué et on inhibe le lien réel
    //                 window.open(this.href);
    //                 return false;
    //             };
    //         }
    //     }
    // }
    // // Au chargement de la page, on appelle la fonction.
    // window.onload = open_ext_link;

    return (
        <div className="navOm">
            <div>
                <Link to="/"><img className="logo" src='./images/OM.png' alt="Logo" /></Link>
            </div>
            <div className="links">
                <Link className="lien_ext" to="/">Portfolio</Link>
                <Link className="lien_ext" to="/about">About</Link>
                <a className="lien_ext" title="S'ouvre dans une nouvelle fenêtre" target="_blank" href="https://www.linkedin.com/in/orianemathet/">
                    LinkedIn</a>
                <Link className="lien_ext" to="/contact">Contact</Link>
            </div>
        </div>
    );
}



export default Header;