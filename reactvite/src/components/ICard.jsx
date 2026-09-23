import React from 'react'

function ICard(props) {
  return (
    <div style={{border:'10px solid black',width:'400px',backgroundColor:'white',margin:'0 auto',height:'700px'}}>
      <h2>College:{props.college}</h2>
      <h2>Roll:{props.roll}</h2>
      <h2>Name:{props.name}</h2>
      <h2>Branch:{props.branch}</h2>
    </div>
  )
}

export default ICard