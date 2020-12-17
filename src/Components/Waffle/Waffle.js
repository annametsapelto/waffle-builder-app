import React from 'react';
import WaffleIngredient from './WaffleIngredient/WaffleIngredient';
import './Waffle.css'

const waffle = (props) => {
    let ingredientsArray = Object.keys(props.ingredients)
    .map(ingKey => {
        return[...Array(props.ingredients[ingKey])].map((_, i) => {
            return <WaffleIngredient key={ingKey + i} type={ingKey}  />
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    });
    if (ingredientsArray.length === 0) {
        ingredientsArray = <p>Please, start adding ingredients.</p>;
    }
    return(
        <div className="Waffle">
            {ingredientsArray}
            <WaffleIngredient type='WaffleBottom'/>
        </div>
    ) 
}


export default waffle;