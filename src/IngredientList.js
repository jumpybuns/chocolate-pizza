import React from 'react'; 

//IngredientList.js
    
export default class IngredientsList extends React.Component {
    render() {
        return (
            <div>
   
                <CheckBoxLeft ingredient='1 1/2 cups milk'/>
                <CheckBoxLeft ingredient='1/2 cup mascarpone'/>
                <CheckBoxLeft ingredient='1/2 tsp pink salt'/>
                <CheckBoxLeft ingredient='1 lb Black Mission Figs'/>
                <CheckBoxLeft ingredient='1/2 cup brown sugar'/>
                <CheckBoxLeft ingredient='2-4 tbsp water'/>
                <CheckBoxRight ingredient='1 1/2 cups heavy cream'/>
                <CheckBoxRight ingredient='1/3 granulated sugar'/>
                <CheckBoxRight ingredient='2 egg yolks'/>
                <CheckBoxRight ingredient='1 lemon, juiced'/>
                <CheckBoxRight ingredient='2 tbsp butter'/>
                <CheckBoxRight ingredient='1 cup honey roasted pecans, roughly chopped'/>
                <ListImage />

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
            <div className='recipe-right'>
                <input type="checkbox"/>
                {this.props.ingredient}
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