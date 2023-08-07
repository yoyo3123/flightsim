import React, { useState } from 'react'
import Alldata from '../ContextApi'
import { useContext } from 'react'

export default function Adddata() {
    const [flight,setFlight]=useState(-1)
    const [company,setCompany]=useState('')
    const [people,setPeople]=useState(0)
    const {Addflight}=useContext(Alldata)
    const {flights}=useContext(Alldata)

    const valid = ()=>{
        let copy = false
        if (flight < 0 || flight > 99999) {
            return alert('flight id has to be between one number to 5')
        }else if (company.length < 1) {
            return alert('company name has to be at least one character')
        }else if (people < 1 || people > 450) {
            return alert('flight cant have less then 1 passenger or more then 450 passengers')
        }else{
            flights.map((val)=>{
                if (val.flightid == flight) {
                    copy = true
                }
            })
            if (copy == true) {
                alert('flight id already used')
            }else{
                Addflight(flight,company,people)
                alert('flight added!!')
            }
            
        }
    }

  return (
    <div  style={{zIndex:1,position:'relative',display:'inline-block'}}>
        
        <input className='inputs' required type="number" max={99999} placeholder='flight id' onChange={(e)=>{setFlight(e.target.value)}}/>
        <input className='inputs' required type="text" minLength={1} placeholder='company name' onChange={(e)=>{setCompany(e.target.value)}} />
        <input className='inputs' required type="number" max={450} min={1} placeholder='people abord' onChange={(e)=>{setPeople(e.target.value)}} />
        <button className='buttons' onClick={()=>{valid()}}>Add flight</button>
        
        
    </div>
  )
}
