import React from 'react';    
   
//BioSection.js
export default class BioSection extends React.Component {
    render() {
        return (
            <div>
                <RepeatImage image="./assets/hr-img.png"/>
                <BioImage />
                <BioText />
                <Button />
            </div>
        )
    }
}

//hr repeat image
export class RepeatImage extends React.Component {
    render() {
        return (
            <div>
                <img className="hr2" src={this.props.image} alt="repeated hash"></img>
            </div>
        )
    }
}

//bio image
export class BioImage extends React.Component {
    render() {
        return (
            <div>
                <img className="bio-button" src="./assets/van-pic.png" alt="Vanessa Stevenson"></img>
            </div>
        )
    }
}

//author name (h5)
//bio text (h5)
export class BioText extends React.Component {
    render() {
        return (
            <div>
                <h5 className="van-name">Vanessa Stevenson</h5>
                <h5 className="van-bio">Food enthusiast, photography fan.  Add a pinch of raw foodism and that’s pretty much who I am.</h5>
            </div>
        )
    }
}

//share recipe button
export class Button extends React.Component {
    render() {
        return (
            <div>
                <button className="share-button">
                    SHARE RECIPE
                </button>
            </div>
        )
    }
}