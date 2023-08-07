import React, { useContext, useState } from 'react'
import Alldata from '../ContextApi'
import Sortdata from './Sortdata'

export default function Sortbuttons() {
    const [input,setInput]=useState('')
    const [info,setInfo]=useState('0')
    const {flights}=useContext(Alldata)


    const pagesort =() =>{
        if (input != '') {
            console.log('hi1');
            return (flights.map((val,ind)=>{
                if (val.comname.includes(input)) {
                    return  <Sortdata flight={val} ind={ind} key={ind}/>
                }
                
            }))
        }else if (info != '0') {
            console.log('hi2');
            if (info == 'more') {
                flights.sort((a,b) => (b.people-a.people))
            }else if (info == 'less') {
                flights.sort((a,b) => (a.people-b.people))
            }
            return (flights.map((val,ind)=>{
                
                return  <Sortdata flight={val} ind={ind} key={ind}/>
            }))
        }else{
            console.log('hi3');
            return (flights.map((val,ind)=>{
                return  <Sortdata flight={val} ind={ind} key={ind}/>
            }))
        }
    }
  return (
    <div  style={{zIndex:1,position:'relative',display:'inline-block'}}>
        <input className='inputs' onChange={(e)=>{setInput(e.target.value)}} placeholder='sort by company name' type="text" />
        <select className='inputs' onChange={(e)=>{setInfo(e.target.value);setInput('')}} name="nums" id="num">
            <option value="0">sort by passengers</option>
            <option value="more">sort by most passengers</option>
            <option value="less">sort by least passengers</option>
        </select>
        <br />
        {pagesort()}
    </div>
  )
}
