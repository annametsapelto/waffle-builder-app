import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(ingKey => {
    return <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]}</li>
    }
        )
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious waffle with following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total price: {props.totalPrice.toFixed(2)} €</p>
            <p>Continue to checkout?</p>
            <Button buttonType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;