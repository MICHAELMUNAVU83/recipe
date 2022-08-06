import React , {useEffect ,useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from "react-router-dom"


function Veggie() {

    useEffect(()=>{
        getVeggie()
    },[])
    const [veggie, setVeggie]=useState([])
    const getVeggie = async ()=>{

      const check = localStorage.getItem('Veggie')
      if(check){
        setVeggie(JSON.parse(check))
      }
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`)
        const data = await api.json()
        localStorage.setItem('Veggie', JSON.stringify(data.recipes))
        setVeggie(data.recipes)

      }
       
    }

    const renderRecipe = veggie.map(recipe =>(
      <SplideSlide key={recipe.id}>
          <div className="card" key={recipe.id}>
        <p>{recipe.title} <Link to={'/recipe/'+ recipe.id}>SEE RECIPE</Link> </p>
        <img src={recipe.image} alt="food " />

       

       </div>

      </SplideSlide>
    
     
    ))
  return (
    <div className="wrapper">
      <h3>VEGGIES</h3>
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


export default Veggie