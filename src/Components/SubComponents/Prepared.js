import React from 'react'
import Productlist from './Productlist'

function Prepared({prepare}) {
  return (
    <div ref={prepare}><h2 style={{fontFamily:'Muli'}}>
      Prepared &#62;
      </h2>
      <Productlist/>
      </div>
  )
}

export default Prepared