import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, ingredients, calories, image }) => {
  return (
    <div className={style.recipe}>
      <h1> {title} </h1>
      <h3>Ingredients:</h3>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        {" "}
        <b>Calories: </b>
        {calories}{" "}
      </p>
      <img className={style.image} src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
