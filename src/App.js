import './App.css';
import { Roomprovider } from './ContextApi';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Loginpage from './components/Loginpage';
import Controlpanel from './components/Controlpanel';
import {Flightlog} from './ContextApi'
import { useState } from 'react';
import Sortbuttons from './components/Sortbuttons'
import Alldatahub from './components/Alldatahub'
import Adddata from './components/Adddata'
import Deletedata from './components/Deletedata'


function App() {
  const [show,setShow]=useState(0)

  const showButtons = ()=>{
    if (show == 1) {
      return ( <Controlpanel/>)
    }
  }


  return (
    <div className="App">
      <Flightlog>
      

      <BrowserRouter>
        {showButtons()}
        <Routes>

        <Route path='/' element={<Loginpage setShow={setShow}/>}/>

        {/* <Route path='/Controlpanel' element={<Controlpanel/>}/> */}
        <Route path='/Controlpanel/All' element={<Alldatahub/>}/>
        <Route path='/Controlpanel/Sort' element={<Sortbuttons/>}/>
        <Route path='/Controlpanel/Add' element={<Adddata/>}/>
        <Route path='/Controlpanel/Delete' element={<Deletedata/>}/>

        {/* <Route path='/room/:name' element={<Personalroom/>}/> */}




        </Routes>
      
      
      
      
      </BrowserRouter>
      </Flightlog>
    </div>
  );
}

export default App;
