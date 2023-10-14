import React from 'react'
import {useSelector} from 'react-redux';
import logo from '../../images/cart.jpg';
import './Navbar.css';

function Navbar() {
    const count=useSelector(state=>state.count) ;
    return (
        <div className='Navcontainer'>
            <div className='wrapped'>
                <div className='left'><h1>E-Commerce</h1></div>
                <div className='right'>
                    <div className='logo'>
                        <img src={logo} style={{height:'28px',padding:'2px 4px',borderRadius:'100px',opacity:'0.8',marginTop:'4px',marginLeft:'4px'}} alt='img' />
                        <span><strong style={{fontSize:'16px',fontFamily:'Muli'}}>{count}</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar