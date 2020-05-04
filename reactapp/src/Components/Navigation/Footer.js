import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../../App.css';


function Footer() {

    return (
        <div className="footer">

            Thanks for the attention !
                <button class="back-to-top-fixed js-editable-target editable js-back-to-top" href="#">
                Back</button>
        </div>
    );
}

export default Footer;