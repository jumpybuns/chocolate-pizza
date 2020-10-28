import React from 'react'; 
import IngredientItem from './IngredientItem';
import Ingredients from './Data.js'
//IngredientList.js
    
export default class IngredientsList extends React.Component {
    render() {
        return (
            <div>
   
                <CheckBoxLeft />
   
                <CheckBoxRight />

            </div>
        )
    }
}
        //2 column list (12 items)
        //checked box for each item
        //background image
export class CheckBoxLeft extends React.Component {
    render() {
        return (
            <div className='recipe-left'>
                <input type="checkbox"/>
                {this.props.ingredient}
            </div>
        )
    }
}
export class CheckBoxRight extends React.Component {
    render() {
        return (
        <div className="IngredientList">    
                      {
            Ingredients.map(ingredient => 
              <IngredientItem
                checked={ingredient.checked} 
                amount={ingredient.amount} 
                ingredient={ingredient.ingredient}
                />)
          }

        </div> 
        )
    }
}
export class ListImage extends React.Component {
    render() {
        return (
            <div>
                <img className="recipe" src='./assets/list-bg.png' alt="list"></img>
            </div>
        )
    }
}

