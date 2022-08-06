import React from 'react'
import Cuisine from './Cuisine'
import Home from './Home'
import { Routes , Route} from "react-router-dom"
import Searched from './Searched'
import Details from './Details'

function Pages() {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path="/searched/:search" element={<Searched/>} />
        <Route path="/cuisine/:type" element={ <Cuisine/>} />
        <Route path="/recipe/:name" element={<Details/>} />
      </Routes>
   
       
    </div>
  )
}

export default Pages