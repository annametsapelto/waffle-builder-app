import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'
import Waffle from '../../Components/Waffle/Waffle'
import BuildControls from '../../Components/Waffle/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Waffle/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    WhippedCream: 0.5,
    ChocolateSauce: 0.8,
    StrawberryJam: 0.3,
    BlueberryJam: 0.3
}
class WaffleMaker extends Component {
    state = {
        ingredients: {
            WhippedCream: 0,
            ChocolateSauce: 0,
            StrawberryJam: 0,
            BlueberryJam: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchaseMode: false
    }

    purchaseModeHandler = () => {
        this.setState({purchaseMode: true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchaseMode: false});
    }
    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    updatePuchaseable(ingredients) {
        const sum = Object.keys(ingredients)
        .map(ingKey => {
            return ingredients[ingKey]
        })
        .reduce((sum, el) => {
            return sum+el;
        }, 0)
        this.setState({purchaseable: sum>0})
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] +1;
        const upgradedIngredients = {
            ... this.state.ingredients
        };
        upgradedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: upgradedIngredients});
        this.updatePuchaseable(upgradedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount -1;
        const upgradedIngredients = {
            ... this.state.ingredients
        };
        upgradedIngredients[type] = updatedCount;
        const priceDeducted = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice - priceDeducted;
        this.setState({totalPrice: newPrice, ingredients: upgradedIngredients});
        this.updatePuchaseable(upgradedIngredients)
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
        <Aux>
            <Modal show={this.state.purchaseMode} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary 
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                totalPrice={this.state.totalPrice}
                ingredients={this.state.ingredients}/>
            </Modal>
            <Waffle ingredients={this.state.ingredients}/>
            <BuildControls 
              addIngredient={this.addIngredientHandler}
              removeIngredient={this.removeIngredientHandler}
              disabled={disabledInfo}
              price={this.state.totalPrice}
              purchaseable={this.state.purchaseable}
              ordered={this.purchaseModeHandler}/>
        </Aux>)
    }
}

export default WaffleMaker;