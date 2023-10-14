import React, { useContext } from 'react'
import Context from '../Context/Context'
import Productlist from './Productlist';

function Produce({pro}) {
  return (
    <div ref={pro}>
      <h2 style={{fontFamily:'Muli'}}>Produce &#62;</h2>
      <Productlist/>
    </div>
  )
}

export default Produce