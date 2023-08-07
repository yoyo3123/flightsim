import React from 'react'


export default function Alldata(props) {
  return (
    <div style={{width:'300px',height:'200px',backgroundColor:'#373737',display:'inline-block',margin:'20px',borderRadius:'20px'}}>
      <h2>flight number: {props.flight.flightid}</h2>
      <h2>company name: {props.flight.comname}</h2>
      <h2>passengers: {props.flight.people}</h2>
    </div>
  )
}
