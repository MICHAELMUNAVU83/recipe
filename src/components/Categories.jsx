import {FaPizzaSlice, FaHamburger} from "react-icons/fa"
import {GiChopsticks, GiNoodles} from "react-icons/gi"

import React from 'react'

function Categories() {
  return (
    <div>
        <nav>
            <div>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </div>
            <div>
                <FaHamburger/>
                <h4>American</h4>
            </div>
            <div>
                <GiNoodles/>
                <h4>Thai</h4>
            </div>
            <div>
                <GiChopsticks/>
                <h4>JAPANESE</h4>
            </div>
        </nav>
    </div>
  )
}

export default Categories