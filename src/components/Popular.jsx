import React , {useEffect ,useState} from 'react'

function Popular() {
    useEffect(()=>{
        getPopular()
    },[])
    const [popular, setPopular]=useState([])
    const getPopular = async ()=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json()
        console.log(data.recipes);
        setPopular(data.recipes)
    }
    const renderRecipe = popular.map(recipe =>(
      <div key={recipe.title}>
        {recipe.title}
        <img src={recipe.image} alt="food " />
      </div>
    ))
  return (
    <div>
      {renderRecipe}
    </div>
  )
}

export default Popular