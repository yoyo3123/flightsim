import React, { useContext } from 'react'
import Alldata from '../ContextApi'
import Alldatas from './Alldatas'

export default function Alldatahub() {
    const {flights}=useContext(Alldata)
  return (
    <div style={{zIndex:1,position:'relative',display:'inline-block'}}>
        {flights.map((val,ind)=>{
                    return  <Alldatas flight={val} ind={ind} key={ind}/>
            })}
    </div>
  )
}
