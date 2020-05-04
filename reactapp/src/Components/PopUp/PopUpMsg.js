import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';


const PopUpMsg = (props) => {
    const [toHome, settoHome] = useState(false);


    return (
        <div className='popup'>
            <div className='popupinner'>
                <p className="popupmsg" style={{ display: "flex" }}>
                    Merci !
                    </p>


                <Link className="button" to="/">Retour à la Home</Link>

            </div>
        </div >

    );

};

export default PopUpMsg;