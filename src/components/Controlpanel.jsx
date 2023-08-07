import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Control.css'



export default function Controlpanel() {
    const nav = useNavigate()

  return (
    
        <div id='flexdiv' >
            <button className='but' onClick={()=>{nav('/Controlpanel/All')}}>All Flights</button>
            <br />
            <button className='but' onClick={()=>{nav('/Controlpanel/Sort')}}>Sort Flights</button>
            <br />
            <button className='but' onClick={()=>{nav('/Controlpanel/Add')}}>Add Flight</button>
            <br />
            <button className='but' onClick={()=>{nav('/Controlpanel/Delete')}}>Delete Flight</button>
        
        </div>
        
        
        
    
  )
}
