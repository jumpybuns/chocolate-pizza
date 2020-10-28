import React from 'react';    
    
//mainImage.js 
export default class MainImage extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Print />
                <PizzaImage />
            </div>
        )
    }
}
    //div title text
    //div post date text
export class Title extends React.Component {
    render() {
        return (
            <div>
                <div className="chocolate-pizza-text">
                    Chocolate Pizza 
                </div>
                <div className="post-date">
                    POSTED ON 15 DEC 2013 / DESSERTS 
                </div>
            </div>
        )
    }
}

    //print text
    //print image
export class Print extends React.Component {
    render() {
        return (
            <div>
                <img className="printimg" src="./assets/print-icon.png" alt="print icon"></img>
                <div className="print">PRINT</div>
            </div>
        )
    }
}

    //main image  
export class PizzaImage extends React.Component {
    render() {
        return (
            <div>
                <img className="chocolate-pizza-img" src="./assets/choco-pizza.png" alt="chocolate pizza"></img>
            </div>
        )
    }
}