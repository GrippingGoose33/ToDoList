import React from 'react';
import PropTypes from 'prop-types';
import logo from '../Images/logo.svg';

const Header = (props) => {

    const {title, url} = props;

        return (
            <header className="App-header">
                <a href={props.url}>
                <img src="http://assets.stickpng.com/thumbs/58718a527b7f6103e35c6ce5.png" className="App-logo" alt="logo" />
                </a>
            <h1>{props.title}</h1>
          </header>
        );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;