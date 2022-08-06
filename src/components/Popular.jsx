import React , {useEffect ,useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from "react-router-dom"


function Popular() {

    useEffect(()=>{
        getPopular()
    },[])
    const [popular, setPopular]=useState([])
    const getPopular = async ()=>{

      const check = localStorage.getItem('popular')
      if(check){
        setPopular(JSON.parse(check))
      }
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
        const data = await api.json()
        localStorage.setItem('popular', JSON.stringify(data.recipes))
        setPopular(data.recipes)

      }
       
    }

    const renderRecipe = popular.map(recipe =>(
      <SplideSlide key={recipe.id}>
        
          <div className="card" key={recipe.id}>
        <p>{recipe.title} <Link to={'/recipe/'+ recipe.id}>SEE RECIPE</Link> </p>
        
        <img src={recipe.image} alt="food " />
       

       

       </div>

      </SplideSlide>
    
     
    ))
  return (
    <div className="wrapper">
      <h3>POPULAR</h3>
      <Splide options={{
        perPage:4,
        arrows:false,
        pagination:false,
        drag:"free",
        gap: "5rem",
      }}>
      {renderRecipe}

      </Splide>
     
    </div>
  )
}


export default Popular