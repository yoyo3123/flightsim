import { createContext,useState } from "react";

const Alldata = createContext()

export const Flightlog = ({children}) =>{

    const[flights,setFlights]= useState([{flightid:12345,comname:'hi',people:1}])

    const deleteflight=(del)=>{
        let res = flights.filter((val)=>(val.flightid != del))
        setFlights(res)
        
    }
    

    const Addflight = (flightid,comname,people) =>{
        setFlights([...flights,{flightid,comname,people}])
        
    }
    return (
        <Alldata.Provider value={{flights, Addflight,deleteflight}}>{children}</Alldata.Provider>

    )
}

export default Alldata;