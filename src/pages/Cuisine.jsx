import React  , {useEffect , useState}from 'react'
import{Link, useParams} from "react-router-dom"
import {motion} from 'framer-motion'

function Cuisine() {
    const [cuisine,setCuisine]= useState([])

    let params = useParams()
    useEffect(()=>{
       getCuisine(params.type)
    },[params.type])
    
    const getCuisine = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`)
        const recipe = await data.json()
        console.log(recipe.results);
        setCuisine(recipe.results)
    }
  return (
    <div className="grid">{cuisine.map(rec=>(
        <div key={rec.id}>
            <img src={rec.image} alt="rec" />
            <p>{rec.title}</p>
            
        </div>

    ))}</div>
  )
}

export default Cuisine