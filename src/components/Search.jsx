import React , {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from "react-router-dom"
function Search() {
    const [input , setinput]= useState('')
    const navigate = useNavigate()
    const handleInput = (e)=>{
        setinput(e.target.value)

    }
    const submitHandler = (e)=>{
        e.preventDefault()
        navigate('/searched/'+input)
    }
  return (
    <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={handleInput} />
        <button type="button" onClick={submitHandler}> SEARCH</button>
        
    </form>
  )
}

export default Search