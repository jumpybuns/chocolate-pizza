import './App.css';
import React from 'react';
import Header from './Header.js';
import MainImage from './MainImage.js';
import Recipe from './Recipe.js';
import IngredientsList from './IngredientList.js';
import BioSection from './BioSections.js';
import Footer from './Footer.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header className="header" /> 
                <MainImage /> 
                <Recipe className="recipe" /> 
                <IngredientsList />
                <BioSection />
                <Footer className="footer" />
            </div>
        );
    }
}
