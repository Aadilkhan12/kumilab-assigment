import React from 'react'
import Productlist from './Productlist'

function Meat({meat}) {
  return (
    <div ref={meat}><h2 style={{fontFamily:'Muli'}}>Meat &#62;</h2>
      <Productlist/>
    </div>
  )
}

export default Meat