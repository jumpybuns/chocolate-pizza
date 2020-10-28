import React from 'react';


export default class ImageItem extends React.Component {
    render() {
        return (
        <div> 
            <h2 className="checked">{this.props.checked}</h2>
            <h2 className="amount">{this.props.amount}</h2>
            <h2 className="ingredient">Keyword:{this.props.ingredient}</h2>

        </div>
        )
    }
}