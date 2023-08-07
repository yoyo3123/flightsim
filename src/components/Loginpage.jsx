import React, { useEffect, useState } from 'react'
import './Control.css';

import { useNavigate } from 'react-router-dom'


export default function Loginpage(props) {
    const nav = useNavigate()
    const [id,setId] = useState()
    useEffect(()=>{
        props.setShow(0)
    },[])

    const validLogin =()=>{
        console.log(id);
        if (id == 'password') {
            props.setShow(1)
            nav('/Controlpanel')
        }else{
            alert('Error')
        }
      }

  return (
    <div id='loginpage'>
        <input type="text" id='login' placeholder='password is password' onChange={(e)=>{setId(e.target.value)}}/>
        <br />
        <button id='button' onClick={()=>{validLogin(id)}}>login</button>
    </div>
  )
}
