import React from 'react';    
    
//header.js 
export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <Button image="./assets/fb-icon.png"/>
                <Button image="./assets/twit-icon.png"/>
                <Button image="./assets/gp-icon.png"/>
                <Button image="./assets/insta-icon.png"/>
                <Button image="./assets/flic-icon.png"/>
                <Button image="./assets/pint-icon.png"/>
                <Button image="./assets/rss-icon.png"/>
                <Button image="./assets/mail-icon.png"/>
                <RepeatImage image="./assets/hr-img.png"/>
            </div>
        )
    }
}

//logo image 
//div logo text
//div logo sub-text
export class Logo extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img className="big-logo" src="./assets/logo.png" alt="the logo"></img>
                </div>
                <div className="head-logo-text">
                    Delicious 
                </div>
                <div className="head-logo-sub-text">
                    THE BEST FOOD BLOG ON THE WEB. 
                </div>
            </div>
        )
    }
}

//8 image-buttons
export class Button extends React.Component {
    render() {
        return (
            <div>
                <button className="head-social">
                    <img className="big-logo" src={this.props.image} alt="the logo"></img>
                </button>
            </div>
        )
    }
}
//hr repeat image
export class RepeatImage extends React.Component {
    render() {
        return (
            <div>
                <img className="hr" src={this.props.image} alt="repeated hash"></img>
            </div>
        )
    }
}