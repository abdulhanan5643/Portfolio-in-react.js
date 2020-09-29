import React, { Component } from 'react';
import Background from '../assets/images/img.jpg';
import '../css/Header.css';

const myStyles = {
    backgroundImage: `url(${Background})`,
    height: '63.5vh',
    backgroundSize: 'cover'
}

class Header extends Component {

    render() {
        return <header style={myStyles}>
            <h1>{this.props.title}</h1>
            <p>A free React theme for Portfolio</p>
            <a href="#button">{this.props.button}</a>
        </header>
    }
};

export default Header