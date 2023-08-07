import React, { useState } from 'react'
import { useContext } from 'react'
import Alldata from '../ContextApi'
export default function Deletedata() {
    const {flights}=useContext(Alldata)
    const {deleteflight}=useContext(Alldata)
    const [del,setDel]=useState()
    const valid =()=>{
        let ind = false
        let people = 0
        if (del < 0 || del > 99999) {
            return alert('flight id cant be more then 5 numbers')
        }
        flights.map((val)=>{
            if (val.flightid == del) {
                ind = true
                people = val.people
            }
        })
        if (ind ==false) {
            return alert('flight id not found')
        }else{
            deleteflight(del)
            let nums = -1
            let sum = 0 - people
            flights.map((val)=>{
                nums++
                sum = Number(sum) + Number(val.people)
            })
            alert(`deleted. ${nums} more plane/s are in the air with ${sum} passengers`)
        }
    }
  return (
    <div  style={{zIndex:1,position:'relative',display:'inline-block'}}>
        <input onChange={(ele)=>{setDel(ele.target.value)}} type="number" className='inputs' placeholder='flight id'/>
        <button className='buttons' onClick={()=>{valid()}}>Delete</button>
    </div>
  )
}
