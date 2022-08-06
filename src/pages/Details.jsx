import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
function Details() {
    const params = useParams()
    const [details, setDetails]= useState([])
    const [active , setActive] = useState('instructions')
    const fetchDetails = async (id)=>{
        const fetchDetailsApi = await fetch (`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailsJson = await fetchDetailsApi.json()
        console.log(detailsJson);
        setDetails(detailsJson)
      
    }
    useEffect(()=>{
       fetchDetails(params.name)
    },[params.name])

  return (
      <motion.div animate ={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition= {{duration:0.8 }}>
          <div key ={details.id}>
        <div>
        <h2>{details.title}</h2>
        <img className="detail-img" src={details.image} alt="details" />

        </div>
        <div>
            <button type="button" onClick={()=>{setActive('instructions')}}>Instructions</button>
            <button type="button" onClick={()=>{setActive('ingredients')}}>ingredients</button>
        </div>
        {active==='instructions' && (
             <div>
             <p dangerouslySetInnerHTML={{__html:details.summary}}></p>
         </div>

        )}
        {active=== 'ingredients' && (
             <div>
             {details.extendedIngredients.map(ingredient =>(
                     <ul>
                         
                     <li key={ingredient.id}>{ingredient.original}</li>
     
                     </ul>
                    
                     
                 ))}
     
             </div>

        )}
       
       
       
            
      
                
               
              

    </div>

      </motion.div>
    
  )
}

export default Details