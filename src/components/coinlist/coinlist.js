import React from 'react';
import ReactTooltip from 'react-tooltip';

import './coinlist.css'

const Coinlist = ({ name, price, fullname }) =>{
    return(
        <div className='coinlist col-sm-5 col-md-3 m-1 d-flex flex-row justify-content-between'>
            <h3 className="text-dark p-2 bd-highlight">
            <a data-tip data-tip={fullname} href='/#' className='fullnameLink'>{name}</a>
            <ReactTooltip place="right" type="dark" effect="float"/>
            </h3>
            <h4 className='align-self-center text-primary'>{price}</h4>
        </div>
    )
}

export default Coinlist;