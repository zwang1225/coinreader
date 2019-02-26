import React from 'react';
import Clock from 'react-live-clock';

const Footer = ()=>{
    const dateNow = new Date().toLocaleDateString();

    return(
        <div className='m-5'>
            <h5>Lastest update: </h5>
            <p>{dateNow} <Clock
        format={'HH:mm'}
        ticking={true} /></p>
        </div>
    )
}

export default Footer;