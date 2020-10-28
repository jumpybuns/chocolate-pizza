import React from 'react';    
   
//Footer.js
export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <hr className="hr-left" />
                <SmallLogo />
                <hr className="hr-right" />
                <Copyright />
            </div>
        )
    }
}
//div split hr
//small logo image
export class SmallLogo extends React.Component {
    render() {
        return (
            <div>
                <img className="small-logo" src="./assets/small-logo.png" alt="Silverware Igon"></img>
            </div>
        )
    }
}

//copyright text
export class Copyright extends React.Component {
    render() {
        return (
            <div className="copyright">
                Delicious &copy; 2013 All Rights Reserved. <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Proudly published with Ghost.
            </div>
        )
    }
}