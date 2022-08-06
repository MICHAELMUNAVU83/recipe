import React, { useState, useEffect } from "react";
import { useParams , Link } from "react-router-dom";

function Searched() {
  const [searched, setSearched] = useState([]);
  const params = useParams();
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  const getSearched = async (searchedfood) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${searchedfood}`
    );
    const searchedFoods = await data.json();
    console.log(searchedFoods.results);
    setSearched(searchedFoods.results);
  };

  return (
    <div>
      {searched.map((eachSearched) => (
        <div key={eachSearched}>
          <img src={eachSearched.image} alt="pic" />
          <p>{eachSearched.title}</p>
          <Link to={'/recipe/'+ eachSearched.id}>SEE RECIPE</Link>
        </div>
      ))}
    </div>
  );
}

export default Searched;
