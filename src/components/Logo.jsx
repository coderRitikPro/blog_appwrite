import React from 'react'

function Logo({width = '5px'}) {
  return (
    <div><img src="https://cdn-icons-png.flaticon.com/512/60/60736.png" style={{"height":"30px","width":`${width}`}}></img></div>
  )
}

export default Logo; 