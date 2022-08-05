import React from 'react'
import Cuisine from './Cuisine'
import Home from './Home'
import { Routes , Route} from "react-router-dom"
import Searched from './Searched'

function Pages() {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path="/searched/:search" element={<Searched/>} />
        <Route path="/cuisine/:type" element={ <Cuisine/>} />
      </Routes>
   
       
    </div>
  )
}

export default Pages