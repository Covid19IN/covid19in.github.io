import React,{ useEffect,useState } from 'react';
import Recipe from './Recipe';



const Blog = () => {
      const[recipes, setRecipes] = useState([]);

      useEffect (() => {
         getRecipes();
      }, []);
       


      const getRecipes = async () => {

         const reponse = await fetch(
          `https://mnrlive.github.io/api/website_data.json`
          );
      const data = await reponse.json();
       setRecipes(data.hits);
 };

  return (

     <div classname="Blog">
     {recipes.map(faq => (
      <Recipe
      key={recipe.faq.question}
      title={recipe.faq.question}
      calories={recipe.recipe.calories}
      image={recipe.faq.image}
      />
      ))}
      </div>

    );
};



export default Blog;
