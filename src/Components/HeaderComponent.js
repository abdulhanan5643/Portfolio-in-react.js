import React, { Component } from 'react';
import Background from '../assets/images/img.jpg';

const myStyles = {
    backgroundImage: `url(${Background})`,
    height: '86.3vh',
    backgroundSize: 'cover'
}

class Header extends Component {
    
    render() {
        return <header style={myStyles}>
            <h1>{this.props.title}</h1>
        </header>
    }
};

export default Header