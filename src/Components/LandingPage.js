import React, {useContext, useRef, useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import './LandingPage.css';
import Context from './Context/Context';
import banana from '../images/banana.png';
import yougurt from '../images/yog.png';
import blacberries from '../images/bb.png';
import strawb from '../images/strawb.png';
import plus from '../images/plus.png';
import minus from '../images/minus.png';
import Navbar from './SubComponents/Navbar';
import Products from './SubComponents/Products';

function LandingPage() {
    return (
        <BrowserRouter>
        <div className='LandingPageContainer'>
            <div className='NavbarContainer'>
            <Navbar />
            </div>
            <div className='ProductContainer'>
            <Products/>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default LandingPage